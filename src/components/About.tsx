export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-0 w-full flex flex-col items-center justify-center bg-white text-sky-900 py-20 font-mono"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6 font-young-serif">About</h2>
        <p>
          {`I’m Josh Rouwhorst, a full‑stack software engineer and web developer based in Grand Rapids, Michigan. I love building things on the web and have a soft spot for great photography and the technologies that power delightful online experiences.`}
        </p>

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

        <h3 className="text-2xl font-bold mt-6 mb-4">{`Let’s connect`}</h3>
        <p>
          {`I’m open to new opportunities and projects—whether you’re hiring,
          launching a web or app initiative, looking to collaborate, or just
          want to chat. Send me a message and let’s talk.`}
        </p>
      </div>
    </section>
  )
}
