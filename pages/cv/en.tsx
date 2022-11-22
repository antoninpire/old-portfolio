import CustomHead from '@components/Head'
import Image from 'next/image'
import { AiOutlinePushpin } from 'react-icons/ai'
import { BsCodeSlash, BsGithub, BsPhone } from 'react-icons/bs'
import { CiCalendarDate } from 'react-icons/ci'
import { HiOutlineMail } from 'react-icons/hi'

export default function en() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <CustomHead title="Antonin PIRE - CV" />
      <div className="h-[20%] w-full bg-white px-[6%] flex items-center">
        <div className="w-[50%] flex flex-col">
          <h1 className="text-4xl font-sono-semibold text-gray-800">
            Antonin Pire
          </h1>
          <h2 className="font-sono-bold text-xl text-gray-500">
            Software Engineer
          </h2>
          <div className="mt-4 flex flex-col gap-y-2">
            <div className="">
              <div className="flex flex-row items-center gap-3">
                <div className="flex flex-row items-center text-gray-500 text-xs gap-x-1">
                  <CiCalendarDate className="text-sm" />
                  <p>1999-21-12</p>
                </div>
                <div className="flex flex-row items-center text-gray-500 text-xs gap-x-1">
                  <AiOutlinePushpin className="text-sm" />
                  <p>Paris, France</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-row items-center gap-3">
                <div className="flex flex-row items-center text-gray-500 text-xs gap-x-1">
                  <BsPhone className="text-sm" />
                  <p>+33780019744</p>
                </div>
                <div className="flex flex-row items-center text-gray-500 text-xs  gap-x-1">
                  <HiOutlineMail className="text-sm" />
                  <p>antonin.pire@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-row items-center gap-3">
                <div className="flex flex-row items-center text-gray-500 text-xs gap-x-1">
                  <BsCodeSlash className="text-sm" />
                  <a
                    href="https://antonin.dev"
                    className="font-sono-semibold text-blue-500"
                  >
                    https://antonin.dev
                  </a>
                </div>
                <div className="flex flex-row items-center text-gray-500 text-xs gap-x-1">
                  <BsGithub className="text-sm" />
                  <a
                    href="https://github.com/antoninpire"
                    className="font-sono-semibold text-blue-500"
                  >
                    https://github.com/antoninpire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-end">
          <div className="overflow-hidden rounded-full relative h-32 w-32 border-2 border-ternary">
            <Image src="/assets/me.png" alt="Me" quality={100} fill />
          </div>
        </div>
      </div>
      <div className="h-[80%] w-full bg-main border-t-2 border-ternary flex px-[6%] py-[5%]">
        <div className="w-[50%] h-full flex flex-col">
          {/* EDUCATION */}
          <div className="flex flex-col">
            <h2 className="text-ternary font-semibold text-xl">Education</h2>

            <div className="flex flex-col mt-4">
              <h3 className="text-base font-semibold">ESIEE PARIS</h3>
              <h3 className="text-[15px] leading-[1.375rem] font-semibold">
                Master in Computer Science Engineering
              </h3>
              <div className="flex items-center gap-x-2">
                <div className="flex items-center text-sm gap-x-1">
                  <CiCalendarDate className="text-base" />
                  <p>2019 - 2022</p>
                </div>
                <div className="flex items-center text-sm gap-x-1">
                  <AiOutlinePushpin className="text-base" />
                  <p>Champs-Sur-Marnes, France</p>
                </div>
              </div>
              <div className="mt-1">
                <ul className="list-disc text-sm px-8">
                  <li>3 years apprenticeship at TCHEKER</li>
                  <li>TOEIC 975 / 990</li>
                  <li>Courses in AI, Machine Learning and 3D</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <h3 className="text-base font-semibold">IUT Marne-la-Vallée</h3>
              <h3 className="text-[15px] leading-[1.375rem] font-semibold">
                BTEC in Computer Science
              </h3>
              <div className="flex items-center gap-x-2">
                <div className="flex items-center text-sm gap-x-1">
                  <CiCalendarDate className="text-base" />
                  <p>2017 - 2019</p>
                </div>
                <div className="flex items-center text-sm gap-x-1">
                  <AiOutlinePushpin className="text-base" />
                  <p>Champs-Sur-Marnes, France</p>
                </div>
              </div>
              <div className="mt-1">
                <ul className="list-disc text-sm px-8">
                  <li>4 month internship at TCHEKER</li>
                  <li>
                    Learned language basics in C, Python, Javascript, Android
                  </li>
                  <li>
                    Courses in methodologies, management and communication
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* END EDUCATION */}

          {/* SKILLS */}
          <div className="flex flex-col mt-6">
            <h2 className="text-ternary font-semibold text-xl">Skills</h2>
            <div className="flex items-center gap-x-2 mt-2">
              <p className="uppercase text-sm font-sono-bold bg-[rgba(80,114,100,0.3)] py-[1px] px-[6px] rounded text-[#9AE6B4] whitespace-nowrap">
                WEB FRONT
              </p>
              <div>
                <p>NextJS / ReactJS / AngularJS</p>
                <p>Typescript</p>
              </div>
            </div>

            <div className="flex items-center gap-x-2 mt-2">
              <p className="uppercase text-sm font-sono-bold bg-[rgba(80,114,100,0.3)] py-[1px] px-[6px] rounded text-[#9AE6B4] whitespace-nowrap">
                WEB BACK
              </p>
              <div>
                <p>NodeJS / NestJS / ExpressJS</p>
                <p>PHP / Socket.IO / Typescript</p>
              </div>
            </div>

            <div className="flex items-center gap-x-2 mt-2">
              <p className="uppercase text-sm font-sono-bold bg-[rgba(80,114,100,0.3)] py-[1px] px-[6px] rounded text-[#9AE6B4]">
                MOBILE
              </p>
              <p className="">React Native, Android native</p>
            </div>

            <div className="flex items-center gap-x-2 mt-3">
              <p className="uppercase text-sm font-sono-bold bg-[rgba(80,114,100,0.3)] py-[1px] px-[6px] rounded text-[#9AE6B4]">
                SOFTWARE
              </p>
              <p className="">C / C++ / C# / Java / Python</p>
            </div>

            <div className="flex items-center gap-x-2 mt-2">
              <p className="uppercase text-sm font-sono-bold bg-[rgba(80,114,100,0.3)] py-[1px] px-[6px] rounded text-[#9AE6B4]">
                DATABASE
              </p>
              <div>
                <p className="">PostgresSQL / MySQL / MongoDB</p>
                <p>SQL Server</p>
              </div>
            </div>

            <div className="flex items-center gap-x-2 mt-2">
              <p className="uppercase text-sm font-sono-bold bg-[rgba(80,114,100,0.3)] py-[1px] px-[6px] rounded text-[#9AE6B4]">
                METHODOLOGIES
              </p>
              <p className="">SCRUM / Agile / V Cycle</p>
            </div>
          </div>

          {/* END SKILLS */}

          {/* LANGUAGES */}

          <div className="flex flex-col mt-6">
            <h2 className="text-ternary font-semibold text-xl">Languages</h2>
            <div className="w-full flex flex-col px-5">
              <div>
                <div className="flex items-center gap-3 mt-4">
                  <p className="font-sono-semibold text-sm">French</p>
                  <p className="font-sono-light text-sm">Native speaker</p>
                </div>

                <div className="flex items-center gap-3">
                  <p className="font-sono-semibold text-sm">Enlgish</p>
                  <p className="font-sono-light text-sm">C1</p>
                </div>

                <div className="flex items-center gap-3">
                  <p className="font-sono-semibold text-sm">German</p>
                  <p className="font-sono-light text-sm">B1</p>
                </div>
              </div>
            </div>
          </div>

          {/* END LANGUAGES */}
        </div>

        <div className="w-[50%] h-full flex flex-col">
          {/* EXPERIENCE */}
          <div className="flex flex-col">
            <h2 className="text-ternary font-semibold text-xl">Experience</h2>

            <div className="flex flex-col mt-2">
              <h3 className="text-base font-semibold">TCHEKER</h3>
              <h3 className="text-[15px] leading-[1.375rem] font-semibold ml-1">
                CTO
              </h3>
              <div className="gap-x-2 flex items-center">
                <div className="flex items-center text-sm gap-x-1">
                  <CiCalendarDate className="text-base" />
                  <p>Sep. 2022 - Now</p>
                </div>
                <div className="flex items-center text-sm gap-x-1">
                  <AiOutlinePushpin className="text-base" />
                  <p>Courbevoie, France</p>
                </div>
              </div>
              <div className="mt-1">
                <ul className="list-disc text-sm px-8">
                  <li>Managing a team of 4 developers / 1 designer</li>
                  <li>Handling clients and collaborations</li>
                  <li>Managing a machine learning project</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <h3 className="text-base font-semibold">TCHEKER</h3>
              <h3 className="text-[15px] leading-[1.375rem] font-semibold ml-1">
                Apprentice Fullstack Web Developer
              </h3>
              <div className="flex items-center gap-x-2 mt-1">
                <div className="flex items-center text-sm gap-x-1">
                  <CiCalendarDate className="text-base" />
                  <p>2019 - 2022</p>
                </div>
                <div className="flex items-center text-sm gap-x-1">
                  <AiOutlinePushpin className="text-base" />
                  <p>Courbevoie, France</p>
                </div>
              </div>
              <div className="mt-1">
                <ul className="list-disc text-sm px-8">
                  <li>Managing a team of 2 developers</li>
                  <li>
                    Lead developer for the making of a mobile app for the
                    &quot;tchekers&quot;
                  </li>
                  <li>
                    Lead developer for the making of a dashboard for internal
                    members and clients
                  </li>
                  <li>
                    Lead developer for the making of a REST API to handle the
                    back-end for the mobile app and dashboard
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* END EXPERIENCE */}

          {/* PROJECTS */}
          <div className="flex flex-col mt-5">
            <h2 className="text-ternary font-semibold text-xl">Projects</h2>
            <div className="flex flex-col mt-2">
              <h3 className="text-base font-semibold">Sinta</h3>
              <h3 className="text-sm font-medium indent-3 mt-1">
                A mobile app for couples, where they can interact with each
                other, store medias, manage a shared calendar, place activities
                on a common map, send notifications to each other, etc.
              </h3>
              <div className="flex items-center gap-x-1 mt-1 flex-wrap gap-y-1">
                <p className="uppercase text-sm font-sono-bold bg-[rgba(80,114,100,0.3)] py-[1px] px-[6px] rounded text-[#9AE6B4] whitespace-nowrap">
                  REACT NATIVE
                </p>
                <p className="uppercase text-sm font-sono-bold bg-[rgba(80,114,100,0.3)] py-[1px] px-[6px] rounded text-[#9AE6B4]">
                  NODEJS
                </p>
                <p className="uppercase text-sm font-sono-bold bg-[rgba(80,114,100,0.3)] py-[1px] px-[6px] rounded text-[#9AE6B4]">
                  SOCKET.IO
                </p>
              </div>
              <div className="flex items-center gap-x-1 mt-1 flex-wrap gap-y-1">
                <p className="uppercase text-sm font-sono-bold bg-[rgba(80,114,100,0.3)] py-[1px] px-[6px] rounded text-[#9AE6B4]">
                  POSTGRES
                </p>
                <p className="uppercase text-sm font-sono-bold bg-[rgba(80,114,100,0.3)] py-[1px] px-[6px] rounded text-[#9AE6B4]">
                  NEXTJS
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <h3 className="text-base font-semibold">Natflix</h3>
              <h3 className="text-sm font-medium indent-3 mt-1">
                A netflix clone implementing 3 different machine learning
                algorithms to suggest content based on users rating.
              </h3>
              <div className="flex items-center gap-x-1 mt-1 flex-wrap gap-y-1">
                <p className="uppercase text-sm font-sono-bold bg-[rgba(80,114,100,0.3)] py-[1px] px-[6px] rounded text-[#9AE6B4] whitespace-nowrap">
                  ReactJS
                </p>
                <p className="uppercase text-sm font-sono-bold bg-[rgba(80,114,100,0.3)] py-[1px] px-[6px] rounded text-[#9AE6B4]">
                  NODEJS
                </p>
                <p className="uppercase text-sm font-sono-bold bg-[rgba(80,114,100,0.3)] py-[1px] px-[6px] rounded text-[#9AE6B4]">
                  MYSQL
                </p>
                <p className="uppercase text-sm font-sono-bold bg-[rgba(80,114,100,0.3)] py-[1px] px-[6px] rounded text-[#9AE6B4]">
                  MACHINE LEARNING
                </p>
              </div>
            </div>
          </div>

          {/* END PROJECTS */}
        </div>
      </div>
    </div>
  )
}
