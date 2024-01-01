import ProjectsSection from '@/components/projects-section'
import Sidebar from '@/components/sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='sm:flex'>
      <Sidebar/>
      <ProjectsSection/>
    </div>
  )
}
