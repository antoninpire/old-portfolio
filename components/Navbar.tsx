import { NAV_ITEMS } from '@constants/nav-items'
import { BsGithub } from 'react-icons/bs'
import { GoCloudDownload } from 'react-icons/go'

const OFFSET_Y = 85

export default function Navbar() {
  const handleClickNavItem = (link: string) => {
    const target = document.querySelector(link)
    if (target === null) return

    const top =
      target.getBoundingClientRect().top + window.pageYOffset - OFFSET_Y

    window.scrollTo({ top, behavior: 'smooth' })
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="w-full flex justify-evenly items-center gap-4 py-5 fixed bg-[rgba(32,32,35,0.5)]">
      <div className="flex items-center gap-4">
        <p
          className="font-sono-bold text-secondary text-lg hover:cursor-pointer"
          onClick={handleScrollToTop}
        >
          Antonin
        </p>

        {NAV_ITEMS.map(item => (
          <p
            className="hover:cursor-pointer"
            key={`nav-item-${item.target}`}
            onClick={() => handleClickNavItem(item.target)}
          >
            {item.label}
          </p>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/antoninpire/portfolio"
          rel="noreferrer"
          target="_blank"
          className="rounded-xl border-2 font-sono-bold px-4 py-2 flex items-center gap-2 hover:cursor-pointer"
        >
          <BsGithub className="text-2xl" />
          Source
        </a>
        <a
          className="rounded-xl border-2 border-ternary text-ternary font-sono-bold px-4 py-2 flex items-center gap-2"
          href="/assets/cv.pdf"
          download="Antonin PIRE CV.pdf"
        >
          <GoCloudDownload className="text-2xl" />
          Resume
        </a>
      </div>
    </nav>
  )
}
