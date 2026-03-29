interface BaseAttributes {
  /** For generating UUID, fix by adding `crypto.randomUUID()` */
  readonly uuid: ReturnType<typeof crypto.randomUUID>
  locked?: {
    value: boolean
    byAuthor: string
  }
}

interface DialogBlock extends BaseAttributes {
  type: "dialogue"
  data: {
    character: string
    content: string
  }
}

interface NarratorBlock extends BaseAttributes {
  type: "narrator"
  data: {
    content: string
  }
}

interface CueBlock extends BaseAttributes {
  type: "cue"
  data: {
    environment: "interior" | "exterior"
    time: string
    location: string
  }
}

interface SectionBlock extends BaseAttributes {
  type: "section"
  data: {
    title: string
    isChronological: true
  }
}

type ExtractKeyAsLiterals<K extends keyof I, I> = I extends {
  [key in K]: infer R
}
  ? R
  : never

export type PlotBlock = DialogBlock | NarratorBlock | CueBlock | SectionBlock

export type PlotBlockTypes = ExtractKeyAsLiterals<"type", PlotBlock>

export interface CharacterItem extends BaseAttributes {
  name: string
  image: string
  default: boolean
  biography?: string
  attributes?: Record<string, string>
}
