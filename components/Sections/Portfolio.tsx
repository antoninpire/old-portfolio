import { PROJECTS } from '@constants/projects'
import Image from 'next/image'

export default function Portfolio() {
  return (
    <div id="portfolio">
      <h2 className="font-sono-bold text-xl">Some Projects</h2>
      <div className="flex justify-between items-center gap-3 py-6">
        {PROJECTS.map(project => (
          <div
            key={`project-${project.label}`}
            className=" w-[48%] flex flex-col hover:cursor-pointer"
          >
            <div className="h-40 w-full rounded-3xl relative overflow-hidden">
              <Image fill src={project.src} alt={project.label} />
            </div>
            <div className="w-full flex items-center flex-col py-3">
              <h3 className="font-sono-bold text-xl py-2">{project.label}</h3>
              <p className="text-center text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
