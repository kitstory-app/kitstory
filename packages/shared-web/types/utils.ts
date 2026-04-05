import type { Snippet } from "svelte"

/**
 * A dynamic schema for generating schema types where one key stays constant and its
 * underlying data model changes
 * 
 * @template KeyName Key name
 * @template KeyValue Key value
 * @template T The provided schema
 */
export type DynamicSchema<KeyName extends string, KeyValue extends PropertyKey, T extends Record<string, unknown>> = Record<KeyName, KeyValue> & T

// biome-ignore lint: `{}` is needed when using as a standalone type while inferring its type
export type WithChildrenSnippet<T extends Record<string, any> = {}> = { children?: Snippet } & T
