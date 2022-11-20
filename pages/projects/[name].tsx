import Layout from '@components/Layout'
import { PROJECT, PROJECT_NAMES, TProject } from '@constants/project'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MdOpenInNew } from 'react-icons/md'

const projects = Object.keys(PROJECT)

type Props = {
  project: TProject[PROJECT_NAMES]
}

const Project: NextPage<Props> = ({ project }) => {
  return (
    <Layout title={`Antonin PIRE - ${project.name}`}>
      <div className="">
        <div className="flex items-center gap-2">
          <Link href="/">
            <p className="text-secondary font-sono-bold border-b border-b-main hover:border-b-secondary hover:cursor-pointer text-lg">
              Antonin
            </p>
          </Link>
          <p>{'>'}</p>
          <h3 className="text-2xl">{project.name}</h3>
        </div>
        <div id="description" className="mt-3 text-center">
          <p>{project.description}</p>
        </div>
        <div
          id="bullets"
          className="mt-5 flex flex-col gap-1 justify-center md:pl-[10%]"
        >
          {project.bullets.map((bullet, index) => (
            <div key={`bullet-${index}`} className="flex items-center gap-2">
              <p className="uppercase text-sm font-sono-bold bg-[rgba(80,114,100,0.3)] py-[1px] px-[6px] rounded text-[#9AE6B4]">
                {bullet.label}
              </p>
              {bullet.content.type === 'text' ? (
                <p>{bullet.content.text}</p>
              ) : (
                <a
                  href={bullet.content.text}
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center gap-1 hover:cursor-pointer text-ternary border-b border-b-main hover:border-b-ternary"
                >
                  <p>{bullet.content.text}</p>
                  <MdOpenInNew />
                </a>
              )}
            </div>
          ))}
        </div>
        <div id="features" className="mt-8">
          <p className="font-sono-bold text-xl">Features</p>
          <ul className="px-8 list-disc mt-4">
            {project.features.map((feature, index) => (
              <li
                key={`feature-${index}`}
                className={`${index !== 0 ? 'mt-2' : ''}`}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div id="images" className="mt-8 flex flex-col gap-3 md:px-8">
          {project.images.map((imageRow, index) => (
            <div
              key={`${project.name}-image-row-${index}`}
              className="flex items-center justify-center gap-2"
            >
              {imageRow.map((image, i) => (
                <div
                  key={`${project.name}-image-${index}-${i}`}
                  className={`relative w-full ${
                    imageRow.length === 1
                      ? 'md:h-72 h-52'
                      : 'lg:h-[512px] md:h-[430px] h-[348px]'
                  } rounded-lg overflow-hidden`}
                >
                  <Image src={image.path} fill alt={image.alt} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: projects.map(name => {
      return {
        params: {
          name
        }
      }
    }),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async context => {
  if (
    !context.params?.name ||
    typeof context.params.name !== 'string' ||
    !projects.includes(context.params.name)
  ) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      project: PROJECT[context.params.name as PROJECT_NAMES]
    }
  }
}

export default Project
