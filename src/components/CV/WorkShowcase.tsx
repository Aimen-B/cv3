// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'
import { IoOpenOutline } from 'react-icons/io5'

interface WorkShowcaseProps {
  image?: any
  title: string
  subtitle?: string
  href?: string
}

const WorkShowcase: NextPage<WorkShowcaseProps> = ({
  image,
  title,
  subtitle,
  href,
}) => {
  return (
    <div className="flex flex-col items-center w-max mr-8 mt-8">
      <div className="overflow-hidden h-32 w-56 rounded">
        {image && <Image src={image} alt="" />}
      </div>
      <a href={href} className="mx-3 mt-2">
        <div className="text-black font-bold text-lg flex justify-center">
          {title}
          <span className="ml-2">{href && <IoOpenOutline />}</span>
        </div>
        <p className="text-black font-bold opacity-75 text-sm text-center">
          {subtitle}
        </p>
      </a>
    </div>
  )
}

export default WorkShowcase
