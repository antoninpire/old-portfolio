import { EMAIL_ADDRESS, PHONE_NUMBER } from '@constants/index'
import Image from 'next/image'
import { useState } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import Typewriter from 'typewriter-effect'
import Loader from './Loader'

export default function Header() {
  const [isImageLoading, setIsImageLoading] = useState(false)

  return (
    <div className="flex">
      <div className="w-[60%]">
        <h1 className="font-sono-bold text-4xl">Antonin Pire</h1>
        {/* <h4 className="font-sono text-xl">{JOB_TITLE}</h4> */}
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString('Software Engineer')
              .pauseFor(2500)
              .deleteAll(40)
              .typeString('Web Developer')
              .pauseFor(2500)
              .deleteAll(40)
              .typeString('FullStack Indie')
              .pauseFor(2500)
              .deleteAll(40)
              .typeString('Software Developer')
              .pauseFor(2500)
              .deleteAll(40)
              .typeString('CTO')
              .pauseFor(2500)
              .deleteAll(20)
              .start()
          }}
          options={{
            wrapperClassName: 'font-sono md:text-xl text-lg',
            cursorClassName: 'md:text-2xl text-xl',
            delay: 70,
            loop: true
          }}
        />
        <a
          href={`mailto:${EMAIL_ADDRESS}`}
          className="flex items-center gap-1 mt-3 hover:text-ternary hover:cursor-pointer"
        >
          <p className="md:text-base text-[15px]">{EMAIL_ADDRESS}</p>
          <FiMail className="md:text-lg" />
        </a>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex items-center gap-1 hover:text-ternary hover:cursor-pointer"
        >
          <p className="md:text-base text-[15px]">{PHONE_NUMBER}</p>
          <BsTelephone className="md:text-lg" />
        </a>
      </div>
      <div className="w-[40%] flex md:items-center justify-center">
        <div className="rounded-full overflow-hidden w-32 h-32 relative">
          {isImageLoading && (
            <div className="w-full h-full flex justify-center items-center">
              <Loader />
            </div>
          )}
          <Image
            src="/assets/me.png"
            alt="Me"
            quality={100}
            priority
            fill
            onLoadStart={() => setIsImageLoading(true)}
            onLoadingComplete={() => setIsImageLoading(false)}
          />
        </div>
      </div>
    </div>
  )
}
