import * as React from "react"
import { SVGProps } from "react"
const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2.4 6.8v.4c0 3.8-2.9 8.2-8.2 8.2-1.6 0-3.1-.5-4.4-1.3h.7c1.3 0 2.6-.5 3.6-1.2-1.3 0-2.3-.9-2.7-2 .2 0 .4.1.5.1.3 0 .5 0 .8-.1-1.3-.3-2.3-1.4-2.3-2.8.4.2.8.3 1.3.4C6.1 9.8 5.6 9 5.6 8c0-.5.1-1 .4-1.4 1.4 1.7 3.5 2.9 5.9 3 0-.2-.1-.4-.1-.7 0-1.6 1.3-2.9 2.9-2.9.8 0 1.6.3 2.1.9.7-.1 1.3-.4 1.8-.7-.2.7-.7 1.2-1.3 1.6.6-.1 1.1-.2 1.7-.5-.4.6-.9 1.1-1.4 1.5z" />
    <path
      d="M0 0h24v24H0z"
      style={{
        fill: "none",
      }}
    />
  </svg>
)
export default TwitterIcon
