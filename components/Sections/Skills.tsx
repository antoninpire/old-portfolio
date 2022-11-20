import { SKILLS } from '@constants/skills'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'

export default function Skills() {
  return (
    <div id="skills">
      <h2 className="font-sono-bold text-xl">Skills</h2>
      <div className="flex justify-around items-center md:py-6 flex-wrap gap-y-8 md:mt-0 mt-8">
        {SKILLS.map((skill, index) => (
          <div key={`skill-${index}`} className="md:w-[30%] w-[40%]">
            <CircularProgressbar
              value={skill.percentage / 100}
              maxValue={1}
              text={`${skill.percentage}%`}
              styles={buildStyles({
                pathColor: `rgba(109, 152, 134, ${skill.percentage / 100})`,
                textColor: 'white',
                trailColor: '#202023',
                backgroundColor: '#3e98c7'
              })}
            />
            <p className="text-lg font-sono-bold text-center py-3">
              {skill.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
