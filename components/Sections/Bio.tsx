export default function Bio() {
  return (
    <div id="bio" className="">
      <h2 className="font-sono-bold text-xl">Bio</h2>
      <ul className="mt-3 px-4">
        <li className="mt-2">
          <div className="flex items-center gap-6">
            <p className="font-sono-bold">1999</p>
            <p>Born in Paris, France.</p>
          </div>
        </li>
        <li className="mt-6">
          <div className="flex gap-6 items-center">
            <div className="flex flex-col">
              <p className="font-sono-bold">2017</p>
              <p className="font-sono-bold -mt-2 text-center">-</p>
              <p className="font-sono-bold -mt-2">2019</p>
            </div>
            <p>
              Completed a BTEC in Computer Science at Université
              Paris-Est-Marne-la-Vallée
            </p>
          </div>
        </li>
        <li className="mt-6">
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <p className="font-sono-bold">2019</p>
              <p className="font-sono-bold -mt-2 text-center">-</p>
              <p className="font-sono-bold -mt-2">2022</p>
            </div>
            <p className="">
              Completed the Master&apos;s Program in Computer Science
              Engineering at ESIEE Paris / Working as an apprentice at{' '}
              <a
                href="https://tcheker.fr/"
                className="font-sono-bold text-ternary uppercase"
              >
                tcheker
              </a>
            </p>
          </div>
        </li>
        <li className="mt-6">
          <div className="flex gap-6 items-center">
            <div className="flex flex-col">
              <p className="font-sono-bold">2022</p>
              <p className="font-sono-bold -mt-2 text-center">-</p>
              <p className="font-sono-bold -mt-2">Now</p>
            </div>
            <p className="">
              Currently the CTO at{' '}
              <a
                href="https://tcheker.fr/"
                className="font-sono-bold text-ternary uppercase"
              >
                tcheker
              </a>
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}
