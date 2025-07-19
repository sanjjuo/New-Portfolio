import * as React from "react"
import { SVGProps } from "react"
const FramerMotionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="#000">
      <path fillOpacity={0.5} d="M12 21V9H6v6l6 6Z" />
      <path d="M18 9V3H6l6 6H6v6h12l-6-6h6Z" />
    </g>
  </svg>
)
export default FramerMotionIcon
