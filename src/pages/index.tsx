import { NextPage } from 'next'
import Image from 'next/image'
import Attribute from '../components/CV/Attribute'
import Credential from '../components/CV/Credential'
import {
  IoAperture,
  IoApps,
  IoBrush,
  IoBuild,
  IoFlower,
  IoLockOpen,
  IoLogoCss3,
  IoLogoFirebase,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoReact,
  IoPerson,
  IoPin,
  IoPlanet,
  IoPrismSharp,
  IoSettings,
  IoLogoWordpress,
  IoTriangle,
} from 'react-icons/io5'
import { IoLogoLinkedin } from 'react-icons/io5'
import { IoLogoTwitter } from 'react-icons/io5'
import { IoLogoInstagram } from 'react-icons/io5'
import { IoLogoDeviantart } from 'react-icons/io5'
import { IoCompass } from 'react-icons/io5'
import { GrMysql } from 'react-icons/gr'
import {
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import Position from '../components/CV/Position'
import WorkShowcase from '../components/CV/WorkShowcase'


// Images for WorkShowcases


// Images for Positions

import LO from '../public/CV/Logo.png'

//
import PFP from '../public/CV/pfp.png'
import Uv from '../public/CV/uv.jpg'
import zinzinoDesk from '../public/CV/zinzino-desk.png'
import RA from '../public/CV/RA.png'
import SR from '../public/CV/store.png'
import LK from '../public/CV/link.png'

const CV: NextPage = () => {
  return (
    <>
    <head>
    <meta property="og:image" content="../public/CV/link.png" />
    </head>
    <div className="">
    <Image className='absolute top-0 -z-50' src={LK} width={200} height={200} alt=''></Image>
    </div>
    <div className="min-h-screen w-full bg-black flex justify-center items-center">

      <div className="bg-gray-dark w-full h-full xl:w-[70%] px-[4%] py-6">
        {/* Identity Section, Picture, Name, Location */}
        <div className="flex items-center">
          {/* Profile Picture */}
          <div className="h-[110px] w-[110px] rounded bg-black relative overflow-hidden grayscale ">
            <Image src={PFP} layout="fill" objectFit="cover" alt="" />
          </div>
          {/* Name, Location */}
          <div className="ml-6">
            <h1 className="text-white text-3xl font-bold">Boudchicha Aimen</h1>
            <p className="text-white opacity-75">
              Front-end Developer
            </p>
            <p className="text-white opacity-50">Algeria, DZ</p>
            <p className="text-white opacity-50">Annaba</p>
            <p className='text-white opacity-75'>Phone: 0668 26 45 17 / 0793 80 79 06</p>
          </div>
        </div>

        {/* Section Divider */}
        <div className="h-[1px] bg-white opacity-20 w-full my-4"></div>

        {/* Links */}
        <div>
          {/* Section Title */}
          <p className="text-white opacity-50 font-bold">Links</p>
          {/* Section Content */}
          <div className="flex my-2  flex-wrap">
            <Attribute
              icon={<IoCompass size={25} color="white" />}
              text="Website"
              href="https://cv-vmit.vercel.app/"
            />
            <Attribute
              icon={<IoLogoLinkedin size={25} color="white" />}
              text="LinkedIn"
              href="https://www.linkedin.com/in/aimen-boudchicha-290479246/"
            />
            <Attribute
              icon={<IoLogoGithub size={25} color="white" />}
              text="GitHub"
              href={'https://github.com/Aimen-B'}
            />
            <Attribute
              icon={<IoPerson size={25} color="white" />}
              text="Instagram"
              href="https://www.instagram.com/primordial_0ne/"
            />

          </div>
        </div>

        {/* Section Divider */}
        <div className="h-[1px] bg-white opacity-20 w-full my-4"></div>

        {/* About */}
        <div>
          {/* Section Title */}
          <p className="text-white opacity-50 font-bold">About</p>
          {/* Section Content */}
          <div className="my-4">
            <p className="text-white text-lg ">
            As a highly motivated web developer, I specialize in React.js,
            HTML, CSS, TypeScript, Tailwind CSS, and Next.js. Creating 
            exceptional user experiences and bringing ideas to life through e
            legant and efficient solutions is my passion.
            <br /> <br /> 
            I stay at the forefront of modern web technologies,
            embracing challenges with enthusiasm. With a strong eye for detail
            and analytical problem-solving skills, I confidently tackle complex 
            tasks.

            I've developed responsive and interactive web applications w
            ith React.js, ensuring a seamless user experience across devices.
            My solid understanding of HTML, CSS, and TypeScript allows me to
            craft well-structured and maintainable code.

            <br />
            <br />
            Leveraging Tailwind CSS, I design visually appealing user interfaces 
            while optimizing performance. Extensive work with Next.js 
            empowers me to deliver high-performance web applications 
            with server-side rendering and optimized client-side routing.

            <br />
            <br />
            Collaboration and teamwork are vital to me, and I thrive in dynamic
            environments that embrace innovative ideas and diverse perspectives.
            My excellent communication skills ensure effective conveyance of 
            technical concepts to both technical and non-technical stakeholders,
            enabling smooth project coordination and successful outcomes.


            </p>
          </div>
        </div>

        {/* Section Divider */}
        <div className="h-[1px] bg-white opacity-20 w-full my-4"></div>

        {/* Tech Experience */}
        <div>
          {/* Section Title */}
          <p className="text-white opacity-50 font-bold">Tech Experience</p>
          {/* Section Content */}
          <div className="flex my-2  flex-wrap">

            <Attribute
              icon={<IoLogoHtml5 size={25} color="orange" />}
              text="HTML5"
              subtitle="2 Yrs"
            />
            <Attribute
              icon={<IoLogoCss3 size={25} color="cyan" />}
              text="CSS3"
              subtitle="2 Yrs"
            />
            <Attribute
              icon={<IoLogoJavascript size={25} color="yellow" />}
              text="JavaScript"
              subtitle="1 Yrs"
            />

            <Attribute
              icon={<IoLogoReact size={25} color="cyan" />}
              text="React"
              subtitle="2 Yrs"
            />


            <Attribute
              icon={<SiNextdotjs size={25} color="white" />}
              text="Nextjs"
              subtitle="1 Yrs"
            />
            <Attribute
              icon={<SiTypescript size={25} color="#4166f5" />}
              text="TypeScript"
              subtitle="1 Yrs"
            />
            <Attribute
              icon={<SiTailwindcss size={25} color="cyan" />}
              text="Tailwind CSS"
            />

            <Attribute
              icon={<IoLogoWordpress size={25} color="white" />}
              text="Wordpress"
            />
          </div>
        </div>

        {/* Section Divider */}
        <div className="h-[1px] bg-white opacity-20 w-full my-4"></div>

        {/* Positions */}
        <div>
          {/* Section Title */}
          <p className="text-white opacity-50 font-bold">
            Projects {'&'} Positions
          </p>
          {/* Section Content */}
          <div className="my-4 space-y-4 ">
            <Position
              image={LO}
              title={'Full-Stack Developer & UI/UX Designer'}
              subtitle="2022 - Present"
              description={[
                'My responsabilities:',
                '- I Designed the Desktop and Mobile UI/UX using Figma',
                '- I Coded all of the Front End using Next.js, HTML, CSS, TypeScript',
                "website: https://razesociety.com/",
                "store: https://store.razesociety.com/",
                
                '𝗦𝗸𝗶𝗹𝗹𝘀: Next.js · Tailwind  · Prisma  · TypeScript · User Interface Design · Responsive Web Design · Figma (Software) · Adobe Photoshop · HTML · CSS · JavaScript',
              ]}
            />
            
          </div>
        </div>

        {/* Section Divider */}
        <div className="h-[1px] bg-white opacity-20 w-full my-4"></div>

        {/* Some Work */}
        <div>
          {/* Section Title */}
          <p className="text-white opacity-50 font-bold">Some Work</p>
          {/* Section Content */}
          <div className="flex flex-wrap justify-center ">
            <WorkShowcase
              image={zinzinoDesk}
              title={'Zinzino'}
              subtitle={'UI/UX Design & Reactjs'}
              href={
                '../public/CV/zinzino-desk.png'
              }
            />

            <WorkShowcase
              image={RA}
              title={'RAZE'}
              subtitle={'UI/UX Design & Reactjs'}
              href={
                'https://razesociety.com/'
              }
            />
            <WorkShowcase
              image={SR}
              title={'RAZE.store'}
              subtitle={'wordpress'}
              href={
                'https://store.razesociety.com/'
              }
            />
            
          </div>
        </div>
        

        {/* Section Divider */}
        <div className="h-[1px] bg-white opacity-20 w-full my-4"></div>

        {/* Credentials */}
        <div>
          {/* Section Title */}
          <p className="text-white opacity-50 font-bold">Credentials</p>
          {/* Section Content */}
          <div className="my-4 text-white">
            <Credential
              image={Uv}
              title="Bac + 2"
              subtitle="University of Badji Mokhtar - hydraulique"
            />
            <br/>
            <Credential
              
              title="Gestion Informatique"
              subtitle="2nd year - In progress"
            />
          </div>
        </div>

        {/* Section Divider */}
        <div className="h-[1px] bg-white opacity-20 w-full my-4"></div>

        {/* Interests */}
        <div>
          {/* Section Title */}
          <p className="text-white opacity-50 font-bold">Interests</p>
          {/* Section Content */}
          <div className="my-4 flex flex-wrap">
            <Attribute
              icon={<IoTriangle size={25} color="white" />}
              text="Software Engineering"
            />
            <Attribute
              icon={<IoPrismSharp size={25} color="hotpink" />}
              text="Machine Learning / AI"
            />
            <Attribute icon={<IoBrush size={25} color="gold" />} text="Art" />
            <Attribute
              icon={<IoSettings size={25} color="thistle" />}
              text="Engineering"
            />
            <Attribute
              icon={<IoApps size={25} color="white" />}
              text="Developer"
            />
            <Attribute
              icon={<IoLockOpen size={25} color="springgreen" />}
              text="Open Source"
            />
          </div>
        </div>

        {/* Section Divider */}
        <div className="h-[1px] bg-white opacity-20 w-full my-4"></div>

      
      </div>
    </div>
    </>
  )
}

export default CV
