import Layout from '@components/Layout'
import Bio from '@components/Sections/Bio'
import Description from '@components/Sections/Description'
import Links from '@components/Sections/Links'
import Portfolio from '@components/Sections/Portfolio'
import Skills from '@components/Sections/Skills'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout title="Antonin PIRE">
      <Description />
      <Bio />
      <Portfolio />
      <Skills />
      <Links />
    </Layout>
  )
}

export default Home
