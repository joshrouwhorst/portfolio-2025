import Nav from '../components/Nav'
import Hero from '../components/Hero'
import { ScrollProvider } from '@/providers/ScrollProvider'
import About from '@/components/About'
import Project from '@/components/Project'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import { TECH_CLOUD } from '@/config'
import WordCloud from '@/components/WordCloud'
import Button from '@/components/ui/Button'

export default function Home() {
  return (
    <ScrollProvider>
      <div className="font-sans">
        <Nav />
        <Hero />
        <div className="flex flex-col lg:flex-row-reverse gap-4 justify-center items-center container mx-auto">
          <div className="w-full lg:w-1/3">
            <WordCloud words={TECH_CLOUD} />
          </div>
          <div className="w-full lg:w-2/3">
            <About />
          </div>
        </div>
        <div id="projects" />
        <Project
          title="BskyBackup"
          link="https://github.com/joshrouwhorst/BskyBackup"
          image="/projects/bskybackup.png"
          stack={[
            'NextJS',
            'Node.js',
            'TypeScript',
            'Tailwind CSS',
            'Docker',
            'GitHub Copilot',
            'AT Protocol',
            'Bluesky API',
          ]}
          className="bg-sky-500 text-sky-100"
        >
          Built a backup tool for Bluesky intended for installation on a
          personal NAS server. This tool archives data from a user account as
          well as draft and post scheduling according to themes. This tool
          fetches timeline data via the AT Protocol, stores posts and
          attachments locally (with deduplication). Focused on privacy and
          security.
        </Project>

        <Project
          title="Aptiv"
          link="https://aptiv.com"
          image="/projects/aptiv.png"
          stack={['Sitefinity', '.NET', 'Azure', 'Angular', 'AngularJS']}
          className="bg-sky-700 text-sky-100"
        >
          Built and deployed the corporate website for Aptiv using Progress
          Sitefinity CMS and hosted on Microsoft Azure. Implemented responsive,
          accessibility-minded templates and component-based content modules in
          Sitefinity; integrated third-party services and APIs for analytics,
          forms, and marketing; and configured CI/CD pipelines and Azure App
          Service for reliable, scalable hosting. Optimized performance with
          image and asset delivery strategies, implemented role-based content
          workflows, and ensured secure configuration and monitoring to meet
          enterprise availability and compliance needs.
        </Project>
        <Project
          title="Celebration Cinema"
          link="https://celebrationcinema.com"
          image="/projects/celebration.png"
          stack={['Sitefinity', '.NET', 'Azure', 'Angular', 'AngularJS']}
          className="bg-sky-900 text-sky-100"
        >
          Built and launched the Celebration Cinema website using Progress
          Sitefinity CMS, hosted on Microsoft Azure, and integrated with a
          custom ticketing system. Delivered responsive, user-focused templates
          and reusable content components in Sitefinity; implemented secure API
          integrations for real-time showtimes and ticketing; and configured
          CI/CD pipelines and scalable Azure hosting for high availability.
          Optimized performance, accessibility, and analytics tracking to
          support peak traffic and improve conversion.
        </Project>

        {/* <Testimonials /> */}
        <Contact />

        <footer className="w-full flex flex-col items-center justify-center bg-sky-50 text-sky-900 py-10">
          <Button
            href="https://github.com/joshrouwhorst/portfolio-2025"
            color="sky"
          >
            Website Source Code
          </Button>
          <div className="text-sm text-gray-500 py-10 text-center font-mono">
            &copy; {new Date().getFullYear()} Josh Rouwhorst. All rights
            reserved.
          </div>
        </footer>
      </div>
    </ScrollProvider>
  )
}
