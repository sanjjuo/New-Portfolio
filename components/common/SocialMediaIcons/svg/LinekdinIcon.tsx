import * as React from "react"
import { SVGProps } from "react"
const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={200}
    height={200}
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      d="M0 0h48v48H0V0z"
      style={{
        fill: "none",
      }}
    />
    <path d="M34 4H14C8.5 4 4 8.5 4 14v20c0 5.5 4.5 10 10 10h20c5.5 0 10-4.5 10-10V14c0-5.5-4.5-10-10-10zM17 35h-4V20h4v15zm-2-18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm20 18h-4v-7.5c0-2.5-1-3.6-3-3.6l-4 .1v11h-4V20l8-.2c3.4 0 7 2 7 7.6V35z" />
  </svg>
)
export default LinkedinIcon
