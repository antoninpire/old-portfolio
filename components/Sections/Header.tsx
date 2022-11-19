import {
  DESCRIPTION,
  EMAIL_ADDRESS,
  JOB_TITLE,
  PHONE_NUMBER
} from '@constants/index'
import Image from 'next/image'
import { useState } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import Loader from '../Loader'

export default function Header() {
  const [isImageLoading, setIsImageLoading] = useState(false)

  return (
    <>
      <div className="flex">
        <div className="w-[60%]">
          <h1 className="font-sono-bold text-4xl">Antonin Pire</h1>
          <h4 className="font-sono text-xl">{JOB_TITLE}</h4>
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="flex items-center gap-1 mt-3 hover:text-ternary hover:cursor-pointer"
          >
            <p>{EMAIL_ADDRESS}</p>
            <FiMail className="text-lg" />
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-1 hover:text-ternary hover:cursor-pointer"
          >
            <p>{PHONE_NUMBER}</p>
            <BsTelephone className="text-lg" />
          </a>
        </div>
        <div className="w-[40%] flex items-center">
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
      <div className="">
        <h2 className="font-sono-bold text-xl">Description</h2>
        <p className="mt-3">{DESCRIPTION}</p>
      </div>
    </>
  )
}
