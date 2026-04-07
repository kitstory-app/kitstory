export type BlockTypes = "character" | "narrator" | "cue"

interface DefineBlock<D extends Record<string, unknown>> {
  readonly uuid: ReturnType<typeof crypto.randomUUID>
  type: BlockTypes
  lock?: {
    reason: string
  }
  comments?: unknown[]
  data: D
  // This is most likely for internal attachments
  attachments?: unknown[]
}

//////////////////////

// Character
export interface CharacterItem {
  name: string
  avatar?: string
  description?: string
}

export type PlotBlock = DefineBlock<{
  character?: string | CharacterItem
  textContent?: string
}>
