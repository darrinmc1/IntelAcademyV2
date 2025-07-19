import type React from "react"

interface LearningPathCardStaticProps {
  title: string
  description: string
  imageUrl: string
}

const LearningPathCardStatic: React.FC<LearningPathCardStaticProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageUrl || "/placeholder.svg"} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  )
}

export default LearningPathCardStatic
