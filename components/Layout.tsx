import { ReactNode } from 'react'
import Footer from './Footer'
import CustomHead from './Head'
import Header from './Header'
import Navbar from './Navbar'

type Props = {
  children?: ReactNode
  title: string
}

export default function Layout({ children, title }: Props) {
  return (
    <div className="w-screen min-h-screen max-w-screen overflow-hidden">
      <CustomHead title={title} />
      <header className="w-full h-full">
        <Navbar />
      </header>
      <main className="2xl:px-[35%] xl:px-[30%] lg:px-[28%] sm:px-[25%] px-[8%] flex flex-col pt-28 md:gap-16 gap-8 pb-8">
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  )
}
