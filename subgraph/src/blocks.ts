import { ethereum } from "@graphprotocol/graph-ts"
import { HederaBlock } from "../generated/schema"

export function handleBlock(block: ethereum.Block): void {
    let id = block.hash.toHexString()
    let blockEntity = new HederaBlock(id);
    blockEntity.number = block.number;
    blockEntity.timestamp = block.timestamp;
    blockEntity.parentHash = block.parentHash.toHexString();
    blockEntity.author = block.author.toHexString();
    blockEntity.difficulty = block.difficulty;
    blockEntity.totalDifficulty = block.totalDifficulty;
    blockEntity.gasUsed = block.gasUsed;
    blockEntity.gasLimit = block.gasLimit;
    blockEntity.receiptsRoot = block.receiptsRoot.toHexString();
    blockEntity.transactionsRoot = block.transactionsRoot.toHexString();
    blockEntity.stateRoot = block.stateRoot.toHexString();
    blockEntity.size = block.size;
    blockEntity.unclesHash = block.unclesHash.toHexString();

    blockEntity.save();
  }
