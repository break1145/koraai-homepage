import { CONTENT_TEXT } from '../constants/humanDataConfig'

const HumanDataTitle = () => {
  return (
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center lg:text-left">
      {CONTENT_TEXT.title.main}{' '}
      <span className="text-blue-600">{CONTENT_TEXT.title.highlight}</span>
    </h2>
  )
}

export default HumanDataTitle