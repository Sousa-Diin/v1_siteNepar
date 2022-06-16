import { Image } from "@chakra-ui/image"

export const LogoSvg = ({ ...props }) => {
  return (
    <Image>
      <svg width='127' height='63' viewBox='0 0 127 63' fill='none' {...props}>
        <rect width='127' height='63' fill='url(#pattern0)' />
        <defs>
          <pattern
            id='pattern0'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use transform='translate(-0.210884 -0.876712) scale(0.00680272 0.0136986)' />
          </pattern>
          <image id='image0' width='205' height='205' />
        </defs>
      </svg>
    </Image>
  )
}
