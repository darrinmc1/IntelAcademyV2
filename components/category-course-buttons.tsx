import { StartCourseButton } from "@/components/start-course-button"

interface CategoryCoursesProps {
  category: string
  courses: {
    title: string
    path: string
  }[]
}

export function CategoryCourseButtons({ category, courses }: CategoryCoursesProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {courses.map((course) => (
          <StartCourseButton key={course.path} path={course.path} className="w-full justify-start px-4" />
        ))}
      </div>
    </div>
  )
}
