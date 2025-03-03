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
      stroke="#F9671C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.25 3h.268c.474 0 .711 0 .905.085.17.076.316.197.42.351.12.174.163.407.248.871L7.25 16h10.422c.453 0 .68 0 .868-.08a.998.998 0 0 0 .415-.331c.12-.165.171-.385.273-.826v-.003l1.57-6.8v-.001c.154-.669.232-1.004.147-1.267a1.001 1.001 0 0 0-.44-.55C20.269 6 19.926 6 19.24 6H5.75m12.5 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgComponent)
export default ForwardRef
