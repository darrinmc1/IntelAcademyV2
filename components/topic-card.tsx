import Image from "next/image"

interface TopicCardProps {
  title: string
  description: string
  image: string
  path: string
  topic: string
  duration: string
  icon?: React.ReactNode
  humor?: string
}

const TopicCard: React.FC<TopicCardProps> = ({ title, description, image, path, duration, icon, humor }) => {
  return (
    <a
      href={path}
      className="block rounded-lg bg-card shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
    >
      <div className="relative h-48 w-full">
        <Image className="object-cover" src={image || "/placeholder.svg"} alt={title} fill />
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          {icon && <div className="mr-2">{icon}</div>}
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="mt-2 text-gray-600">{description}</p>
        {humor && <p className="mt-2 text-sm text-gray-500 italic">{humor}</p>}
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">{duration}</div>
        </div>
      </div>
    </a>
  )
}

export default TopicCard
export { TopicCard }
