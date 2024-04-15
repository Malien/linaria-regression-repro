import React from "react"
import ReactDOM from "react-dom/client"
import * as Tooltip from "@radix-ui/react-tooltip"
import { css } from "@linaria/core"

const cls = css`
    background-color: red;
`

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Tooltip.Root className={cls}>
            <Tooltip.Trigger>Hover me</Tooltip.Trigger>
            <Tooltip.Content>Tooltip content</Tooltip.Content>
        </Tooltip.Root>
    </React.StrictMode>,
)
