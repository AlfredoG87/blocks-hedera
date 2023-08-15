# Hedera Blocks

Indexing Hedera Blocks Data

## Converter Registry Contract

- contracts/ConverterRegistryContract.sol

#### Running a Local Graph Node

```sh
npm install
npm run deploy-contract
npm run spin-graph-node
npm run codegen
npm run create-subgraph
npm run deploy-subgraph
```

Example [Query](http://127.0.0.1:8000/subgraphs/name/blocks-hedera/graphql?query=%7B%0A++blocks+%7B%0A++++id%0A++++number%0A++++timestamp%0A++++parentHash%0A++++author%0A++++difficulty%0A++++totalDifficulty%0A++++gasUsed%0A++++gasLimit%0A++++receiptsRoot%0A++++transactionsRoot%0A++++stateRoot%0A++++size%0A++++unclesHash%0A++%7D%0A%7D)