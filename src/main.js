import { css } from "@linaria/core"
import * as Tooltip from "@radix-ui/react-tooltip"

// A dummy css rule just to trigger linaria evaluation thingy
css`
  background-color: red;
`

// `import "@radix-ui/react-tooltip"` is also sufficient.
//
// NOTE: If I were to do something like this:
// ```
// import { Tooltip } from "@radix-ui/react-tooltip"
// <Tooltip />
// ```
// The bug would not manifest. It's only when I import the entire module that it does.
// The import gets tree-shaken away.
//
// If I were to miss the `<Tooltip />` part, the bug would be back.

