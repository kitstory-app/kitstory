/** biome-ignore-all lint/correctness/noUnusedFunctionParameters: method implementation still work-in-progress */
import type { PlotBlock } from "./types/blocks"

type DataAdapter = "sqlite" | "dexie"

export class KitstoryBaseSync {
  block: BlockSync
  character: CharacterSync

  constructor(
    protected dataAdapter: DataAdapter,
    protected projectId: string,
  ) {
    this.block = new BlockSync()
    this.character = new CharacterSync()
  }
}

// placeholder type
type UUID = string

class BlockSync {
  /** Cache changes if user stopped typing to prevent any possible data corruption */
  cacheChanges(block: UUID, data: Record<string, unknown>) {}

  /** Adds a block from the working environment */
  add(blockType: PlotBlock) {}

  changeBlockType(sourceBlock: UUID, blockType: PlotBlock) {}

  /** Moves a block from a certain position */
  move(sourceBlock: UUID, destBlock: UUID) {}

  /** Removes one or multiple blocks */
  remove(...block: UUID[]) {}

  /** Loads all of the blocks from a given project or document */
  spawn() {}
}

class CharacterSync {}
