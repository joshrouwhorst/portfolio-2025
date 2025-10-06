import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="px-8 py-15 md:p-0 lg:h-[700px] w-full flex flex-col items-center justify-center bg-sky-500"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-12 container mx-auto h-full group">
        <div className="relative">
          <Image
            src="/hero.png"
            alt="Profile Picture"
            width={600}
            height={600}
            className="w-[300px] lg:w-[600px] rounded-full object-cover transition-all ease-in-out duration-700 bg-transparent group-hover:bg-[rgba(255,255,255,0.8)] group-hover:border-12 border-sky-900"
          />
        </div>

        <div>
          <p className="text-lg text-sky-100 font-young-serif">
            Hi, my name is
          </p>
          <h1 className="text-6xl font-bold font-young-serif text-sky-900">
            Josh Rouwhorst
          </h1>
          <p className="text-xl font-bold text-sky-100 font-mono">
            Senior Software Engineer &amp; Web Developer
          </p>
        </div>
      </div>
    </section>
  )
}
