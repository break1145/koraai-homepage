import { CONTENT_TEXT } from '../constants/humanDataConfig'

const HumanDataDescription = () => {
  return (
    <p className="text-gray-600 text-sm md:text-base mb-8 text-center lg:text-left leading-relaxed">
      {CONTENT_TEXT.description.line1}
      <br className="hidden md:block" />
      {CONTENT_TEXT.description.line2}
      <br className="hidden md:block" />
      {CONTENT_TEXT.description.line3}
      {CONTENT_TEXT.description.line4}
    </p>
  )
}

export default HumanDataDescription