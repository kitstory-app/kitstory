import type { CharacterItem } from "$lib/types";
import { arrayWritable } from "./arrayWritable";

export const characterStore = arrayWritable<CharacterItem>();

export const addCharacter = (...definitions: CharacterItem[]) => {
  characterStore.update((prevData) => ([...prevData, ...definitions]))
}