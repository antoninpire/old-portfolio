import CustomHead from '@components/Head'
import Navbar from '@components/Navbar'
import Bio from '@components/Sections/Bio'
import Footer from '@components/Sections/Footer'
import Header from '@components/Sections/Header'
import Links from '@components/Sections/Links'
import Portfolio from '@components/Sections/Portfolio'
import Skills from '@components/Sections/Skills'

export default function Home() {
  return (
    <div className="w-screen min-h-screen max-w-screen overflow-hidden">
      <CustomHead title="Antonin PIRE" />
      <header className="w-full h-full">
        <Navbar />
      </header>
      <main className="md:px-[35%] px-[10%] flex flex-col pt-28 gap-16 pb-8">
        <Header />
        <Bio />
        <Portfolio />
        <Skills />
        <Links />
        <Footer />
      </main>
    </div>
  )
}
