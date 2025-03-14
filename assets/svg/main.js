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
      stroke="#AAA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 17.5v-5.548c0-.534 0-.801-.065-1.05a2 2 0 0 0-.28-.617c-.145-.213-.345-.39-.748-.741l-4.8-4.2c-.746-.653-1.12-.98-1.54-1.104-.37-.11-.764-.11-1.135 0-.42.124-.792.45-1.538 1.102L5.093 9.544c-.402.352-.603.528-.747.74a2 2 0 0 0-.281.618C4 11.15 4 11.418 4 11.952V17.5c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.082 1.083c.368.152.834.152 1.766.152s1.398 0 1.766-.152a2 2 0 0 0 1.082-1.083C10 18.898 10 18.432 10 17.5v-1a2 2 0 1 1 4 0v1c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.082 1.083c.368.152.834.152 1.766.152s1.398 0 1.766-.152a2 2 0 0 0 1.082-1.083C20 18.898 20 18.432 20 17.5Z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgComponent)
export default ForwardRef
