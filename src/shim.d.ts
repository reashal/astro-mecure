// typescript compatibility for vite-plugin-svgr with exportAsDefault:true
declare module '*.svg' {
  import * as React from 'react'

  const Component: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >;
  export default Component;
}


// // support importing .astro in .ts file
// declare module '*.astro' {
//   import { AstroComponentFactory } from 'astro'
//   export default AstroComponentFactory;
// }