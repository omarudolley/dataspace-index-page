// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
}

// https://github.com/poppa/sveltekit-svg
// Vite ships a type definition for *.svg which states that import Comp from './file.svg returns a string.
// So providing a default type definition for *.svg is in most cases causing a conflict which will lead to TSC errors when treating such an import as a Svelte component.
// So the best way to avoid errors, current and future,is to always use import Comp from './file.svg?component

declare module "*.svg?component" {
  import type { ComponentType, SvelteComponentTyped } from "svelte"
  import type { SVGAttributes } from "svelte/elements"

  const content: ComponentType<SvelteComponentTyped<SVGAttributes<SVGSVGElement>>>

  export default content
}
