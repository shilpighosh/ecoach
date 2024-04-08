import DbConnect from "../DbConnect";
import CourseCard from "../components/CourseCard";
import Course from "../models/Course";


export default async function Home() {
  await DbConnect()
const courses = await Course.find();

  return (
    <>


      <div className="flex px-16 mt-10">
          {courses.map((course, index) => (
            <CourseCard key={index} data={course} />
          ))}
      </div>
    </>
  );
}
