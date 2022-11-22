import { DESCRIPTION } from '@constants/index'

export default function Description() {
  return (
    <div id="description" className="md:mt-0 mt-4">
      <h2 className="font-sono-bold text-xl">Description</h2>
      <p className="mt-3 md:text-left text-center">
        &emsp;&nbsp;
        {DESCRIPTION}
      </p>
    </div>
  )
}
