const {assert} = require('chai')
const {expect} = require('chai')
const MemoryToken = artifacts.require('./MemoryToken.sol')

require('chai').use(require('chai-as-promised')).should()

contract('Memory Token', (accounts) => {
	let _test
	let token

  const account1 = accounts[1]
    const tokenId1 = 1111;
    const tokenUri1 = "This is data for the token 1"; // Does not have to be unique

    const account2 = accounts[2]
    const tokenId2 = 2222;
    const tokenUri2 = "This is data for the token 2"; // Does not have to be unique
    const account3 = accounts[3]
   

	before(async () => {
		_test = {
			token: {
				name: 'Memory Token',
				symbol: 'MEMORY',
				uri: 'https://test.com/nft',
			},
		}

		token = await MemoryToken.deployed()
	})

	describe('Deployment', async () => {

		it('deploys successfully', async () => {
			assert.notEqual(token.address, 0x0 || '' || null || undefined)
		})

		it('has a name', async () => {
			const name = await token.name()
			assert.equal(name, _test.token.name)
		})

		it('has a symbol', async () => {
			const symbol = await token.symbol()
			assert.equal(symbol, _test.token.symbol)
		})
	})

	describe('Token distribution', async () => {
		let result

		it('mint tokens', async () => {
			const [owner] = accounts

			// Mint tokens.
			await token.mint(owner, _test.token.uri)

			// Total supply should increase.
			result = await token.totalSupply()
			assert.equal(result.toString(), '1', 'total supply is correct')

			// Owner blance should increase.
			result = await token.balanceOf(owner)
			assert.equal(result.toString(), '1', 'balance is correct')

			// Owner should own token.
			result = await token.ownerOf('1')
			assert.equal(result.toString(), owner.toString(), 'owner is correct.')

			// Check that owner indeed now owns a token.
			result = await token.tokenOfOwnerByIndex(owner, 0)

			// Owner can see all tokens.
			const balanceOf = await token.balanceOf(owner)
			const tokenIds = []

			for (let index = 0; index < balanceOf; index += 1) {
				const tokenId = await token.tokenOfOwnerByIndex(owner, index)
				tokenIds.push(tokenId.toString())
			}

			assert.equal(tokenIds.toString(), ['1'].toString(), 'Token IDs are correct')

			const tokenURI = await token.tokenURI('1')
			assert.equal(tokenURI, _test.token.uri)
		})
		 it(' should allow safe transfers', async () => {
        const unownedTokenId = token.safeTransferFrom(account2, account3, tokenId1, {from: accounts[0]}) // tokenId
        expect(unownedTokenId).to.be.rejectedWith(/VM Exception while processing transaction: revert/)

        const wrongOwner = token.safeTransferFrom(account1, account3, tokenId2, {from: accounts[0]}) // wrong owner
        expect(wrongOwner).to.be.rejectedWith(/VM Exception while processing transaction: revert/)

        // Noticed that the from gas param needs to be the token owners or it fails
        const wrongFromGas = token.safeTransferFrom(account2, account3, tokenId2, {from: accounts[0]}) // wrong owner
        expect(wrongFromGas).to.be.rejectedWith(/VM Exception while processing transaction: revert/)

        // await token.safeTransferFrom(account2, account3, tokenId2, {from: accounts[0]})
        // expect(await token.ownerOf(tokenId2)).should.equal(account3)
    })
	})
})
