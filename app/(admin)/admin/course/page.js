import DbConnect from "@/app/DbConnect";
import { handleDelete } from "@/app/actions";
import Course from "@/app/models/Course";
import Link from "next/link";
import { redirect } from "next/navigation";


export default async function coursePage(){

    await DbConnect(); 
    const courses = await Course.find();

   
    return(
       <div className="w-full px-20 mt-5">
         <div className="w-full flex justify-between items-center">
             <h1 className="text-2xl font-bold">Manage Courses</h1>
             <Link href="course/insert" className="bg-green-500 text-white px-3 py-2 rounded">Insert Course</Link>
         </div>
         <table className="border w-full mt-5">
             <thead>
                <tr>
                    <th className="border p-4">Id</th>
                    <th className="border p-4">title</th>
                    <th className="border p-4">duration</th>
                    <th className="border p-4">instructor</th>
                    <th className="border p-4">fees</th>
                    <th className="border p-4">lang</th>
                    <th className="border p-4">Mode</th>
                    <th className="border p-4">Action</th>
                </tr>
             </thead>
             <tbody>
                  {
                    courses.map((course, index) => {
                        let courseId = course._id.toString()
                        let handleDeletewithId = handleDelete.bind(null, courseId)

                        return(
                          <tr>
                            <td className="border p-3">{index+1}</td>
                            <td className="border p-3">{course.title}</td>
                            <td className="border p-3">{course.duration}</td>
                            <td className="border p-3">{course.instructor}</td>
                            <td className="border p-3"><del>{course.fee}</del> {course.discountFee}</td>
                            <td className="border p-3">{course.lang}</td>
                            <td className="border p-3">{course.mode}</td>
                            <td className="border p-3">
                                 <form action={handleDeletewithId} method="post">

                                    <input type="submit" className="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded" value="x"/>
                                </form>
                            </td>
                            
                          </tr>
                        )
})
                     
                  }
             </tbody>
         </table>

       </div>
    )
}