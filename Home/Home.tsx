import WhoAmI from '@/components/common/WhoAmI/WhoAmI'
import Hero from '@/components/Hero/Hero'
import Skills from '@/components/Skills/Skills'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <div className='app-width'>
        <WhoAmI readmore='home'/>
      </div>
      <Skills/>
    </div>
  )
}

export default Home
