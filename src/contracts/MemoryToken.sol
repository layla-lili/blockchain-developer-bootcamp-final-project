// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;
/// @title NFT MEMORY GAME
/// @notice NFT Memery Game smart contract

/// @notice inhert NFT (ERC721) contracts from openzeppelin.
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
/**
 * @notice Optional enumeration implementation for ERC-721 non-fungible token standard.
 */
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
/**
 * @notice ERC721 token with storage based token URI management.
 */
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
///@notice  Wrappers over Solidity's arithmetic operations.
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

///@notice 
import "@openzeppelin/contracts/access/Ownable.sol";

contract MemoryToken is ERC721, ERC721Enumerable, ERC721URIStorage , Ownable{
  
  event Minted(uint256 tokenId);
  using SafeMath for uint256;

  /**
		@notice Initializes the contract by setting a name and a symbol to the token collection.
		*/
  constructor() ERC721("Memory Token", "MEMORY") {}

  /**
		@notice Hook that is called before any token transfer. This includes minting and burning.
		@dev calling condition When from and to are both non-zero, from's tokenId will be transferred to to

		@param from address token from
		@param to address to tranfer token to
		@param tokenId the  token ID
		*/
  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 tokenId
  ) internal override(ERC721, ERC721Enumerable) {
    super._beforeTokenTransfer(from, to, tokenId);
  }

        /*
		@notice Internal function to burn a specific token. Reverts if the token does not exist.
		@param tokenId the token ID
		*/
  function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
    super._burn(tokenId);
  }

  /**@dev Returns the URI for a given token ID. May return an empty string.
   If the token’s URI is non-empty and a base URI was set (via _setBaseURI), it will be added to the token ID’s URI as a prefix.
   Reverts if the token ID does not exist.
   @param tokenId the token ID
    */
  function tokenURI(uint256 tokenId)
    public
    view
    override(ERC721, ERC721URIStorage)
    returns (string memory)
  {
    return super.tokenURI(tokenId);
  }

  ///@notice Returns true if account supports the IERC165 interface,
  function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721, ERC721Enumerable)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }

  /**
   /// @notice This is a minting function
   /**  @dev the function takes player addrress and nft uri and 
	incremnt number of nft the player gained and assign token uri to 
	player address and finally returns boolean value(True) if minting was sucessfull
	*/
  ///@notice totalSupply Returns the total amount of tokens stored by the contract.
  /// @param _to player address
  ///@param _tokenURI nft uri

  function mint(address _to, string memory _tokenURI) public onlyOwner returns (bool) {
    uint256 _tokenId = totalSupply().add(1);
    _mint(_to, _tokenId);
    _setTokenURI(_tokenId, _tokenURI);
    emit Minted(_tokenId);
    return true;
  }
}
