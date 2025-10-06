import { ReactNode } from 'react'
import Button from './ui/Button'
import Image from 'next/image'

interface ProjectProps {
  title?: string
  link?: string
  image?: string
  children: ReactNode
  className?: string
  stack?: string[]
}

export default function Project({
  title,
  link,
  image,
  children,
  className,
  stack,
}: ProjectProps) {
  return (
    <div className={`px-6 md:px-0 w-full ${className} py-20 font-mono`}>
      <div className="mx-auto">
        <div className="mx-auto container flex flex-col-reverse lg:flex-row items-start justify-between gap-20">
          <div className="w-full lg:w-1/2 xl:w-1/3 flex flex-col">
            {title && <h3 className="text-3xl font-bold mb-4">{title}</h3>}
            {children}
            {stack && (
              <>
                <h4 className="text-lg font-bold mt-4">Tech Stack</h4>
                <ul className="list-disc list-inside space-y-1 text-sm mt-4 mb-8">
                  {stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </>
            )}
            {link && (
              <div>
                <Button href={link} color="white">
                  View Project
                </Button>
              </div>
            )}
          </div>
          <div className="w-full lg:w-1/2 xl:w-2/3 flex justify-end">
            {image && (
              <Image
                src={image}
                alt={title || 'Project Image'}
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
