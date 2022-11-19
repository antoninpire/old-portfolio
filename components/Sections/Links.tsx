import { LINKS } from '@constants/links'

export default function Links() {
  return (
    <div id="links">
      <h2 className="font-sono-bold text-xl">Links</h2>
      <div className="flex justify-around items-center py-6 flex-wrap gap-y-8">
        {LINKS.map((link, index) => (
          <a
            key={`link-${index}`}
            href={link.url}
            rel="noreferrer"
            target="_blank"
            className="flex justify-center items-center gap-3 hover:cursor-pointer"
          >
            <link.Icon />
            <p className="font-sono-bold">{link.username}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
