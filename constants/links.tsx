import { IconType } from 'react-icons'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export type TLink = {
  url: string
  username: string
  Icon: IconType
}

export const LINKS: TLink[] = [
  {
    url: 'https://fr.linkedin.com/in/antonin-pire-7a5259155',
    username: '@antonin-pire',
    Icon: () => <BsLinkedin className="text-2xl text-ternary" />
  },
  {
    url: 'https://github.com/antoninpire',
    username: '@antoninpire',
    Icon: () => <BsGithub className="text-2xl text-ternary" />
  }
]
