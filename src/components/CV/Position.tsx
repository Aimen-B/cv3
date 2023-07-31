// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'
import { IoOpenOutline } from 'react-icons/io5'

interface PositionProps {
  icon?: any
  title: string
  subtitle?: string
  href?: string
  description?: Array<string>
  image?: StaticImageData
}

const Position: NextPage<PositionProps> = ({
  title,
  subtitle,
  href,
  description,
  image,
}) => {
  return (
    <div className="flex ">
      <div className=" h-14 w-14 min-w-[56px] rounded overflow-hidden">
        {image && <Image src={image} alt="" />}
      </div>
      <div className="mx-3">
        <a href={href} className="text-white font-bold text-lg flex">
          {title} <span className="ml-2">{href && <IoOpenOutline />}</span>
        </a>
        <p className="text-white font-bold opacity-75">{subtitle}</p>
        {/* description */}
        <div>
          {description &&
            description.map((line, i) => (
              <p key={i} className="text-white opacity-75 text-base ">
                {line}
              </p>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Position
