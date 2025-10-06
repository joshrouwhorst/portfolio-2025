export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-0 w-full flex flex-col items-center justify-center bg-white text-sky-900 font-mono"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6 font-young-serif">About</h2>
        <div className="flex flex-col gap-4">
          <p>
            {`I’m Josh Rouwhorst, a full‑stack software engineer and web developer based in Grand Rapids, Michigan. I love building things on the web and have a soft spot for great photography and the technologies that power delightful online experiences.`}
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-4">My Story</h3>

          <p>
            {`Working on websites started for me at Northview High School. I took
          classes on HTML, CSS, and JavaScript. I learned enough that I was able
          to make websites for friends' bands and customize their MySpace pages.`}
          </p>

          <p>
            I loved the skill and kept playing with it for years. And when I was
            23 I decided to go back to school to learn how to make it my career.
          </p>

          <p>
            {`While I was in school I would work on the projects that I was
          assigned, but I also worked on massive projects like building my own,
          fully functional social networking site (this was when The Social
          Network just came out). Projects like that helped me learn languages
          we weren't learning in school, like PHP, and improve my understanding
          of new concepts I was learning, like Object-Oriented Programming.`}
          </p>

          <p>
            A teacher at my school hired me at his company. I worked there for
            several years, customizing SharePoint sites for Hewlett-Packard. Our
            work primarily revolved around eLearning to train employees. We
            built tools for our clients to easily create new courses, track
            progress, and systems to gameify training for the end users.
          </p>

          <p>
            Eventually I moved on to, Springthrough, where I worked for almost 9
            years on enterprise-level consumer-facing web development projects.
            Some of my clients have been hospitals, movie theaters, banks, and
            auto part manufacturers.
          </p>

          <p>
            {`At Mutually Human I've had a range of projects from internal
          project-tracking tools to online education and content streaming. The
          typical projects include a .NET back-end hosted in Azure with a
          Next.js front-end paired with TailwindCSS.`}
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-6 mb-4">What I do now</h3>
        <ul className="list-disc list-inside space-y-2 text-base text-sky-800">
          <li>Senior Software Developer at Mutually Human (full‑time)</li>
          <li>
            Primary technologies: Next.js, .NET, Azure, and complementary web
            tools and services
          </li>
          <li>
            I collaborate with clients and designers to plan, architect, and
            deliver robust, maintainable solutions that meet business goals.
          </li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-4">Background</h3>
        <ul className="list-disc list-inside space-y-2 text-base text-sky-800">
          <li>
            Extensive experience with Sitefinity and the .NET ecosystem from my
            time at Springthrough
          </li>
          <li>
            Representative clients: Aptiv, Celebration Cinema, Corewell Health
          </li>
        </ul>
      </div>
    </section>
  )
}
