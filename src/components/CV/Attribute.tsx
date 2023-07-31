// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

interface AttributeProps {
  icon?: any
  text: string
  subtitle?: string
  href?: string
}

const Attribute: NextPage<AttributeProps> = ({
  icon,
  text,
  subtitle,
  href,
}) => {
  return (
    <a
      className="flex items-center p-3 rounded bg-gray-light space-x-2 mt-2 mr-2"
      href={href}
    >
      {icon !== undefined && <div>{icon}</div>}
      <p className="text-white font-bold text-sm">{text}</p>
      {/* <p className="text-white opacity-50 text-xs">{subtitle}</p> */}
    </a>
  )
}

export default Attribute
