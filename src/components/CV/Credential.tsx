
import { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'
import { IoOpenOutline } from 'react-icons/io5'

interface CredentialProps {
  image?: StaticImageData
  title: string
  subtitle?: string
  href?: string
}

const Credential: NextPage<CredentialProps> = ({
  image,
  title,
  subtitle,
  href,
}) => {
  return (
    <div className="flex">
      <div className="bg-lime-400 h-24 w-24 rounded relative overflow-hidden">
        {image && <Image src={image} layout="fill" objectFit="cover" alt="" />}
      </div>
      <div className="mx-3 mt-2">
        <a href={href} className="text-white font-bold text-lg">
          {title}{' '}
          <span className="float-right ml-2">{/* <IoOpenOutline /> */}</span>
        </a>
        <p className="text-white font-bold opacity-75 text-base">{subtitle}</p>
      </div>
    </div>
  )
}

export default Credential
