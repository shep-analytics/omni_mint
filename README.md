# bearNFTFrontEnd


## instructions for setting up ganache dev enviorment

1. Compile contract using truffle compile (in the omni repo)
2. Goto build folder and open Bear.json
3. Copy the abi array
4. Update src/contract/ABIs.js bearTokenABI = [abi_array_from_Bear.json]
5. Run truffle migrate (bearNFT repo)
6. Copy the contract address and update  src/contract/contractAddress.js
7. npm start and it should work


test?