import { Clock, Users, BookOpen } from 'lucide-react';

const CourseCard = ({ course = {} }) => {
  // Destructure with default values to prevent undefined errors
  const {
    imageUrl = "https://i.pinimg.com/736x/7e/05/8d/7e058d01d8ee1303f1eeb7d92a7b3c0c.jpg",
    title = "Course Title",
    description = "Course Description",
    duration = "N/A",
    students = 0,
    level = "Beginner"
  } = course;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Course Image */}
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#09090B] mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Course Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            <span>{students} students</span>
          </div>
          <div className="flex items-center">
            <BookOpen size={16} className="mr-1" />
            <span>{level}</span>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-[#09090B] text-[#FAFAFA] py-2 rounded-md hover:bg-gray-800 transition-colors duration-200">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;