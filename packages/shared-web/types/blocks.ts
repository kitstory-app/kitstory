import type { DynamicObjectRecord } from "./utils"

interface KitstorySchemaBase<BlockType extends string, Schema extends DynamicObjectRecord> {
  readonly uuid: string
  type: BlockType
  data: {
    locked?: {
      value: boolean
      byAuthor: string
    }
  } & Schema
}

type DialogBlock = KitstorySchemaBase<"dialogue", {
  character: string
  content: string
}>


type NarratorBlock = KitstorySchemaBase<"narrator", {
  content: string
}>

type CueBlock = KitstorySchemaBase<"cue", {
  environment: "interior" | "exterior"
  time: string
  location: string
}>

type SectionBlock = KitstorySchemaBase<"section", {
  title: string
  isChronological: true
}>

export type PlotBlock = DialogBlock | NarratorBlock | CueBlock | SectionBlock
export type PlotBlockTypes = PlotBlock["type"]

export type CharacterItem<Attributes extends DynamicObjectRecord = Record<string, string>> = KitstorySchemaBase<"character", {
  name: string
  image: string
  default: boolean
  biography?: string
  attributes?: Attributes
}>
