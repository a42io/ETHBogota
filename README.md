

## Description

zmorpheus delivers a pseudonymous, seamless zk-based token-gating solution for real-world use cases of proving  ownership of NFTs with privacy. Anyone can easily host token-gated events where only those with a particular NFT and participants can prove that they have one of them without revealing their identities. 

And One more thing, it can be connected to IoT devices, which make it easier to build token-gated spaces in the real world. In this hackathon, we use smart-lock to demonstrate the interaction with IoT devices.

## Motivation

We have two motivations for this project.

 First is that zkp should be common good for all developers, not only for specialists. there are several super useful tools, languages, libraries for app developers in which we can make use of ZKP without knowing much about it, such as KZG commitment, Polynomials, Lagrange, plonk, plonky2, halo2, etc.. 
 
 Second, Ethereum has more potential in the real world with IoT devices, which drives Ethereum as common good not only in the "Web", but also in our real lives.

## Technologies

### Semaphore
Our product is based on Semaphore. We use semaphore packages, including libraries for frontend, group and base contracts for our smart contracts, and verifiers for onchain verifications. In our case, Semaphore is used for proof of membership.

### Scroll
todo
### Polygon
todo
### Graph Protocol
We use graph protocol to obtain specific event firing histories so that we can create merkle tree for zk-proof generations in frontend without using  backend db or something.

### WalletConnect
We use WalletConnect to make it easier for users to join Web3 world. WalletConnect makes it possible to interact with Dapps in normal browsers without interacting with  annoying not good in-app-browser.

## Deployed contracts
### Scroll Pre-Alpha Testnet

| Name | Contract Address | Verified |
| ---- | ---- | --- |
| Zmorpheus| 0x529544436D947dd28C4c7dDf1757BE70DeDc57a9 | Not Yet |
|  Verifier16  |  0x674Ae972F5B4E1dcc7f1BFAdf14dc00A5628026a  | Not Yet |
|  PoseidonT3  |  0x818F98DF6a0ad1E1bCB2FAC08247c8Ad0724013d  | Not Yet |
| TreeLib|0x3EF4D8f281335aA21336A63D1da3A158Fa63b9CC | Not Yet |

### Polygon Matic

| Name | Contract Address | Verified |
| ---- | ---- | --- |
| Zmorpheus| [0xB5A2De0eE509815C3Ce8f1F6D5a25347Ea6b3e24](https://polygonscan.com/address/0xB5A2De0eE509815C3Ce8f1F6D5a25347Ea6b3e24) | Not Yet |
|  Verifier16  |  [0x9D6177Ad9031846C2a3F3C791CbCdae87565E962](https://polygonscan.com/address/0x9D6177Ad9031846C2a3F3C791CbCdae87565E962)  | Not Yet |
|  PoseidonT3  |  [0xbBbF2237f921029c40c4c3fDA9d409915A6A6606](https://polygonscan.com/address/0xbBbF2237f921029c40c4c3fDA9d409915A6A6606)  | Not Yet |
| TreeLib|[0xD8f10dF965C53B8448a77B7d16c44B36b56dE095](https://polygonscan.com/address/0xD8f10dF965C53B8448a77B7d16c44B36b56dE095) | Not Yet |

## Deployed Graph
[Hosted Service](https://thegraph.com/hosted-service/subgraph/hiroism007/zmorpheus)