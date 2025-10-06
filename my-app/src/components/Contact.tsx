import Button from './ui/Button'
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../config'

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full h-[400px] flex flex-col items-center justify-center font-mono"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 font-young-serif text-sky-900">
          Get In Touch
        </h2>
        <p className="mb-8 text-lg text-sky-900">
          {`I'm currently open to new opportunities and collaborations. Whether
          you have a question, a project idea, or just want to say hello, feel
          free to reach out!`}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={`mailto:${EMAIL}`} color="sky">
            Email
          </Button>
          <Button href={LINKEDIN_URL} color="teal">
            LinkedIn
          </Button>
          <Button href={GITHUB_URL}>GitHub</Button>
        </div>
      </div>
    </section>
  )
}
