'use client'

import { useEffect, useRef, useState } from 'react'

interface TestimonialProps {
  quote: string
  name: string
  title: string
  url?: string
}

const testimonialRecords: TestimonialProps[] = [
  {
    quote:
      'Josh is a highly skilled developer with a keen eye for detail. His ability to translate complex requirements into functional and user-friendly applications is impressive. He consistently delivers high-quality work on time and is a pleasure to collaborate with.',
    name: 'Jane Smith',
    title: 'Senior Developer at TechCorp',
    url: 'https://www.linkedin.com/in/janesmith',
  },
  {
    quote:
      'Working with Josh was a fantastic experience. He brought innovative ideas to the table and demonstrated exceptional problem-solving skills. His dedication to the project and proactive communication made a significant difference in our success.',
    name: 'John Doe',
    title: 'Project Manager at InnovateX',
    url: 'https://www.linkedin.com/in/johndoe',
  },
  {
    quote:
      'Josh is a talented developer who consistently goes above and beyond. His technical expertise, combined with his collaborative approach, makes him an invaluable asset to any team. I highly recommend him for any development project.',
    name: 'Emily Johnson',
    title: 'CTO at WebSolutions',
    url: 'https://www.linkedin.com/in/emilyjohnson',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const testimonialCount = testimonialRecords.length

  useEffect(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonialCount)
    }, 5000)
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
        <div className="relative w-full mx-auto">
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
