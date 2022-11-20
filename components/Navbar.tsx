import { NAV_ITEMS } from '@constants/nav-items'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { BsGithub } from 'react-icons/bs'
import { GoCloudDownload } from 'react-icons/go'

const OFFSET_Y = 85

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const router = useRouter()

  const handleClickNavItem = (link: string) => {
    if (router.pathname.includes('projects')) {
      router.push(`/${link}`)
      return
    }

    const target = document.querySelector(link)
    if (target === null) return

    const top =
      target.getBoundingClientRect().top + window.pageYOffset - OFFSET_Y

    window.scrollTo({ top, behavior: 'smooth' })
  }

  const handleScrollToTop = () => {
    if (router.pathname.includes('projects')) {
      router.push(`/`)
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="w-full flex md:justify-evenly justify-between md:px-0 px-5 items-center gap-4 py-5 fixed bg-[rgba(32,32,35,0.5)] z-30 backdrop-blur">
      <div className="hidden md:flex items-center gap-4">
        <p
          className="font-sono-bold text-secondary text-lg hover:cursor-pointer"
          onClick={handleScrollToTop}
        >
          Antonin
        </p>

        {NAV_ITEMS.map(item => (
          <p
            className="hover:cursor-pointer border-b border-main hover:border-white"
            key={`nav-item-${item.target}`}
            onClick={() => handleClickNavItem(item.target)}
          >
            {item.label}
          </p>
        ))}
      </div>
      <div className="items-center gap-4 hidden md:flex">
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

      <div className="md:hidden flex">
        <p
          className="font-sono-bold text-secondary text-2xl hover:cursor-pointer"
          onClick={handleScrollToTop}
        >
          Antonin
        </p>
      </div>
      <div className="md:hidden flex items-center gap-2">
        <a
          href="https://github.com/antoninpire/portfolio"
          rel="noreferrer"
          target="_blank"
          className="rounded-xl border-2 font-sono-bold px-4 py-2 flex items-center gap-2 hover:cursor-pointer"
        >
          <BsGithub className="text-2xl" />
        </a>
        <a
          className="rounded-xl border-2 border-ternary text-ternary font-sono-bold px-4 py-2 flex items-center gap-2"
          href="/assets/cv.pdf"
          download="Antonin PIRE CV.pdf"
        >
          <GoCloudDownload className="text-2xl" />
        </a>
      </div>
      <div className="md:hidden flex items-center gap-2">
        <div
          className="burger w-10 h-8 relative rotate-0 transition-[0.5s_ease-in-out] cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {Array.from({ length: 4 }, (x, y) => y).map((x, index) => {
            let classes = ''
            switch (index + 1) {
              case 1:
                classes = open ? 'top-[0.75rem] w-0 left-[50%]' : 'top-0'
                break
              case 2:
                classes = open ? '!rotate-45 top-[0.75rem]' : 'top-[0.75rem]'
                break
              case 3:
                classes = open ? '!-rotate-45 top-[0.75rem]' : 'top-[0.75rem]'
                break
              case 4:
                classes = open ? 'top-[0.75rem] w-0 left-[50%]' : 'top-[1.5rem]'
                break
            }
            return (
              <span
                key={`navbar-span-${index}`}
                className={`block absolute h-[0.4rem] w-full bg-white rounded-[0.4rem] opacity-100 left-0 rotate-0 transition-[0.25s_ease-in-out] ${classes}`}
              />
            )
          })}
        </div>
      </div>
      <div
        className={`${
          open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } absolute top-[84px] right-0 transition-[0.5s_ease-in-out] z-40 bg-[rgba(32,32,35,0.99)] py-6 px-4 rounded-xl backdrop-blur flex flex-col gap-y-2 justify-center items-center w-[50%]`}
      >
        {NAV_ITEMS.map(item => (
          <p
            className="hover:cursor-pointer border-b border-main hover:border-white"
            key={`nav-item-${item.target}`}
            onClick={() => handleClickNavItem(item.target)}
          >
            {item.label}
          </p>
        ))}
      </div>
    </nav>
  )
}
