import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { forwardRef } from "react"
const SvgComponent = (props, ref) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    ref={ref}
    {...props}
  >
    <G clipPath="url(#a)">
      <Path fill="#fff" fillOpacity={0.01} d="M23.25 3.5h-21v21h21v-21Z" />
      <Path
        stroke="#008C44"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.875 3.5h-5.25a.875.875 0 0 0-.875.875v5.25c0 .483.392.875.875.875h5.25a.875.875 0 0 0 .875-.875v-5.25a.875.875 0 0 0-.875-.875ZM9.875 14h-5.25a.875.875 0 0 0-.875.875v5.25c0 .483.392.875.875.875h5.25a.875.875 0 0 0 .875-.875v-5.25A.875.875 0 0 0 9.875 14ZM20.375 3.5h-5.25a.875.875 0 0 0-.875.875v5.25c0 .483.392.875.875.875h5.25a.875.875 0 0 0 .875-.875v-5.25a.875.875 0 0 0-.875-.875ZM20.375 14h-5.25a.875.875 0 0 0-.875.875v5.25c0 .483.392.875.875.875h5.25a.875.875 0 0 0 .875-.875v-5.25a.875.875 0 0 0-.875-.875Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.75.5h24v24h-24z" />
      </ClipPath>
    </Defs>
  </Svg>
)
const ForwardRef = forwardRef(SvgComponent)
export default ForwardRef
