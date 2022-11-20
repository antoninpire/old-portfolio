import { PROJECTS } from '@constants/projects'
import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio() {
  return (
    <div id="portfolio" className="md:mt-0 mt-4">
      <h2 className="font-sono-bold text-xl">Some Projects</h2>
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-3 gap-8 md:py-6 md:mt-0 mt-8">
        {PROJECTS.map(project => (
          <Link
            className="md:w-[48%] w-[75%] flex flex-col hover:cursor-pointer md:hover:text-ternary"
            href={project.path}
            key={`project-${project.label}`}
          >
            <div className="h-40 w-full rounded-xl relative overflow-hidden">
              <Image fill src={project.src} alt={project.label} />
            </div>
            <div className="w-full flex items-center flex-col py-3">
              <h3 className="font-sono-bold text-xl py-2">{project.label}</h3>
              <p className="text-center text-sm">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
