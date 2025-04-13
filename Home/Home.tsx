import Hero from '@/components/Hero/Hero'
import Services from '@/components/CommonUi/Services/Services'
import Skills from '@/components/Skills/Skills'
import WhoAmI from '@/components/CommonUi/WhoAmI/WhoAmI'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <div className='app-width'>
        <WhoAmI image='homeImage'/>
        <Services/>
      </div>
      <Skills/>
    </div>
  )
}

export default Home
