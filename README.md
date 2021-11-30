# blockchain-developer-bootcamp-final-project

Consensys Blockchain Bootcamp Final Project
# blockchain-developer-bootcamp-final-project

Consensys Blockchain Bootcamp Final Project


## Game intro
nft-memory-game: is a matching binary image(nft) game once match 
it will reward the player the nft he gained and increase tokens number 
the game data will be store in the contract.  public\NewGame.JPG

## Game flow
1-player will open the demo Link
2-then will be asked to connect to metamask if the browser support it.
3-the player will start playing and will be notifyed of match or mimatch by alert.
4-if player finish all matching, an alert will congrats and will tell the final score
5-new game will start and player will be able to see the token from previos game
 if he is connected to same account.

## Prerequisites

## Directory Structure
```
blockchain-developer-bootcamp-final-project/
┣ migrations/
┃ ┣ 1_initial_migration.js
┃ ┗ 2_deploy_contracts.js
┣ node_modules/
┣ public/
┃ ┣ images/
┃ ┣ favicon.ico
┃ ┣ index.html
┃ ┣ logo192.png
┃ ┣ logo512.png
┃ ┣ manifest.json
┃ ┗ robots.txt
┣ src/
┃ ┣ abis/
┃ ┣ components/
┃ ┣ context/
┃ ┣ contracts/
┃ ┣ utils/
┃ ┣ index.js
┃ ┣ logo.png
┃ ┗ serviceWorker.js
┣ test/
┃ ┣ .gitkeep
┃ ┗ MemoryToken.test.js
┣ .babelrc
┣ .editorconfig
┣ .env
┣ .gitattributes
┣ .gitignore
┣ LICENSE
┣ package.json
┣ README.md
┣ truffle-config.js
┗ yarn.lock

## deploying the Game
FIRST:  clone the repo: https://github.com/layla-lili/blockchain-developer-bootcamp-final-project.git
SECOND: cd blockchain-developer-bootcamp-final-project
THIRD:  open project vscode or any IDE 
FORTH:  yarn install or npm install
FIFTH:  if deploy locally make sure you have ganache-cli and truffle should be  installed globally
        if deploy on textnet (rinkeby) create ".env" file and place your memonic as 
        REACT_APP_MNEMONIC = ... and your RPC_url as REACT_APP_RPC_URL = ... (infura or any other provider)
         and without comma (;) at the end and without qoutes.
SIXTH: run "truffle develop" | for windows users you may face some error so better use wsl2-ubuntu 20.4 terminal
SEVENTH: run "truffle test " 
EAGHTH: IF TEST PASSES RUN  run  "truffle console --network development" to interact with contract locally   "truffle migrate --reset --compile-all" . 
(for testnet make sure to get test eth from avaiable rinkeby faucet https://faucet.rinkeby.io/ 
or any future trusted faucet.
and "run truffle migrate --reset --network rinkeby" for testnet 

### React Frontend
FINALLY: if the all contract compiled and/or deployed run "yarn start" or "npm start"
the dapp will open at http://localhost:3000/  if port 3000 is avaible connect throght metmask and enjoy! ~(^w^)~


## Project Demo

-DApp Demo:https://empty-rain-2201.on.fleek.co/

-video Link: https://www.loom.com/share/5c270b0774a441689d6c8f03ffafaecb

..
`certificate : 0x2326085E6753be00097d0c2679229441dfbe9635`


