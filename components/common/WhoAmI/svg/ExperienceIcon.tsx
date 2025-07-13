import * as React from "react"
import { SVGProps } from "react"
const ExperienceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="#1C274C">
      <circle cx={12} cy={6} r={4} />
      <path
        d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"
        opacity={0.5}
      />
    </g>
  </svg>
)
export default ExperienceIcon
