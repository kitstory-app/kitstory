import { getContext, setContext } from "svelte"

// Big thanks to: https://gist.github.com/tlux/0d87ec94581866567dad2ce64fa7c527
interface TypedContext<T> {
  get: () => T
  set: (ctx: T) => T
}

const contextBuilder = <T>(key: string): TypedContext<T> => {
  return {
    get: () => getContext<T>(key),
    set: (ctx: T) => setContext(key, ctx),
  }
}

export default contextBuilder
