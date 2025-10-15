'use client'

import { useEffect, useRef, useState } from 'react'

const SLIDE_TIME = 5 * 1000

interface TestimonialProps {
  quote: string
  name: string
  title: string
  url?: string
}

const testimonialRecords: TestimonialProps[] = [
  {
    quote: `Josh has been instrumental in executing project support and enhancements, 
      as well as contributing to the development of applications that replaced legacy systems. His
experience debugging and supporting legacy applications has been particularly valuable, as he
brings both patience and technical acumen to these often-challenging situations.`,
    name: 'Mitch Kett',
    title: 'Senior Engineering Manager at Mutually Human',
    url: 'https://www.linkedin.com/in/%F0%9F%92%BB-mitch-kett-99a485b/',
  },
  {
    quote: `Josh worked well with clients and Product Managers to clarify requirements, demo
functionality, and keep projects moving forward even when time or budget was limited. He
was dependable, easy to work with, and contributed steadily to our team's success.`,
    name: 'Lori Mackson',
    title: 'VP of Custom Software at Mutually Human',
    url: 'https://www.linkedin.com/in/lorimackson/',
  },
  {
    quote: `Working with Josh was genuinely enjoyable. He’s a great listener who can quickly identify
both the real problems and the hidden opportunities in any situation. His ability to cut
through the noise and deliver effective solutions was a huge asset to our team.`,
    name: 'Kris Coleman',
    title: 'Director of Platform Engineering at TestifySec',
    url: 'https://www.linkedin.com/in/kris-codeman',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const testimonialCount = testimonialRecords.length

  const pauseSlideshow = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const resumeSlideshow = () => {
    if (!timeoutRef.current) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonialCount)
      }, SLIDE_TIME)
    }
  }

  useEffect(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonialCount)
    }, SLIDE_TIME)
    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current)
    }
  }, [current, testimonialCount])

  return (
    <section
      id="testimonials"
      className="px-6 md:px-0 w-full flex flex-col items-center justify-center bg-white text-sky-900 py-20 font-mono"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-young-serif">
          From People Who Know Me
        </h2>
        <div
          className="relative w-full mx-auto"
          onMouseEnter={pauseSlideshow}
          onMouseLeave={resumeSlideshow}
        >
          <div className="py-10 px-6 md:px-20 border-9 border-sky-500 min-h-[600px] md:min-h-[400px] md:h-[400px] flex flex-col items-center">
            <div className="rounded-lg transition-shadow duration-300 flex-1 justify-center flex flex-col">
              <p className="text-lg italic mb-4">
                {testimonialRecords[current].quote}
              </p>
              <p className="font-bold">{testimonialRecords[current].name}</p>
              <p className="text-sm text-gray-600">
                {testimonialRecords[current].title}
              </p>
              {testimonialRecords[current].url && (
                <a
                  href={testimonialRecords[current].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:underline cursor-pointer"
                >
                  View LinkedIn Profile
                </a>
              )}
            </div>
            <div className="flex justify-center mt-4 space-x-2 justify-self-end">
              {testimonialRecords.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-2 w-2 rounded-full cursor-pointer hover:bg-sky-300 transition-all ${
                    idx === current ? 'bg-sky-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
