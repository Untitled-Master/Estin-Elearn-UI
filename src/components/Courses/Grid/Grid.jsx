import CourseCard from '../Cards/Cards';

const CoursesGrid = () => {
  // Sample courses data
  const courses = [
    {
      id: 1,
      title: "Introduction to Computer Science",
      description: "Learn the fundamentals of computer science and programming",
      duration: "8 weeks",
      students: 120,
      level: "1cp",
      imageUrl: "https://i.pinimg.com/736x/86/6c/24/866c2407ff76c5e6398392fcb7fbda47.jpg"
    },
    {
      id: 2,
      title: "Data Structures and Algorithms",
      description: "Master the essential concepts of DSA",
      duration: "12 weeks",
      students: 85,
      level: "2cp",
      imageUrl: "https://i.pinimg.com/736x/86/6c/24/866c2407ff76c5e6398392fcb7fbda47.jpg"
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      description: "Build modern web applications from scratch",
      duration: "16 weeks",
      students: 200,
      level: "1cs",
      imageUrl: "https://i.pinimg.com/736x/86/6c/24/866c2407ff76c5e6398392fcb7fbda47.jpg"
    },
    
    {
        id: 2,
        title: "Data Structures and Algorithms",
        description: "Master the essential concepts of DSA",
        duration: "12 weeks",
        students: 85,
        level: "2cp",
        imageUrl: "https://i.pinimg.com/736x/86/6c/24/866c2407ff76c5e6398392fcb7fbda47.jpg"
      },
      {
        id: 3,
        title: "Web Development Bootcamp",
        description: "Build modern web applications from scratch",
        duration: "16 weeks",
        students: 200,
        level: "1cs",
        imageUrl: "https://i.pinimg.com/736x/86/6c/24/866c2407ff76c5e6398392fcb7fbda47.jpg"
      },
    
      {
        id: 2,
        title: "Data Structures and Algorithms",
        description: "Master the essential concepts of DSA",
        duration: "12 weeks",
        students: 85,
        level: "2cp",
        imageUrl: "https://i.pinimg.com/736x/86/6c/24/866c2407ff76c5e6398392fcb7fbda47.jpg"
      },
      {
        id: 3,
        title: "Web Development Bootcamp",
        description: "Build modern web applications from scratch",
        duration: "16 weeks",
        students: 200,
        level: "1cs",
        imageUrl: "https://i.pinimg.com/736x/86/6c/24/866c2407ff76c5e6398392fcb7fbda47.jpg"
      },
    {
      id: 4,
      title: "Artificial Intelligence Fundamentals",
      description: "Explore the basics of AI and machine learning",
      duration: "10 weeks",
      students: 150,
      level: "1cs",
      imageUrl: "https://i.pinimg.com/736x/86/6c/24/866c2407ff76c5e6398392fcb7fbda47.jpg"
    }
  ];

  return (
    <div className="bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-[#ffffff] mb-8">Available Courses: </h2>
        <hr />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses && courses.map(course => (
            <CourseCard key={course.id} course={course} />
            ))}
        </div>
        </div>
    </div>
  );
};

export default CoursesGrid;