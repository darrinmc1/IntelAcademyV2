import type React from "react"

interface TopicCardStaticProps {
  title: string
  description: string
  imageUrl: string
  completionCount?: number
}

const TopicCardStatic: React.FC<TopicCardStaticProps> = ({ title, description, imageUrl, completionCount }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageUrl || "/placeholder.svg"} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <div className="mt-4">
          {completionCount && <div className="text-sm text-gray-500">{completionCount} completions</div>}
        </div>
      </div>
    </div>
  )
}

export default TopicCardStatic
