interface WordCloudProps {
  words: { text: string; weight: number }[]
}

export default function WordCloud({ words }: WordCloudProps) {
  const getFontClass = (weight: number) => {
    switch (weight) {
      case 1:
        return 'text-sm'
        break
      case 2:
        return 'text-base'
        break
      case 3:
        return 'text-2xl'
        break
      case 4:
      default:
        return 'text-4xl'
        break
    }
  }

  const getColorClass = (weight: number) => {
    switch (weight) {
      case 1:
        return 'text-sky-300'
        break
      case 2:
        return 'text-sky-400'
        break
      case 3:
        return 'text-sky-500'
        break
      case 4:
      default:
        return 'text-sky-600'
        break
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 max-w-xl mx-auto">
      {words
        .sort((a, b) => b.weight - a.weight)
        .map((word) => {
          return (
            <span
              key={word.text}
              className={`${getFontClass(word.weight)} ${getColorClass(
                word.weight
              )} font-bold transition-transform transform hover:scale-110 cursor-pointer`}
            >
              {word.text}
            </span>
          )
        })}
    </div>
  )
}
