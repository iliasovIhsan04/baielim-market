import * as React from "react"
import Svg, { Path } from "react-native-svg"
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
    <Path
      stroke="#008C44"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 19c0-2.21-2.686-4-6-4s-6 1.79-6 4m6-7a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgComponent)
export default ForwardRef
