import Course from "@/app/models/Course";
import {writeFile} from "fs/promises"
import { redirect } from "next/navigation";
import {join} from "path";

export const handleSubmit = async (formData) => {
    "use server";
    let title = formData.get("title")
    let instructor = formData.get("instructor")
    let duration = formData.get("duration")
    let fee = formData.get("fee")
    let discountFee = formData.get("discount_fee")
    let mode = formData.get("mode")
    let lang = formData.get("lang")
    let description = formData.get("description")
    //image work
    let file = formData.get("featured_image")
    let featuredImage = file.name;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = join("./public","course_image", featuredImage)

    await writeFile(path, buffer);
    //connection
    let data = await Course.create({title,instructor,duration,fee,discountFee,mode,lang,description,
    featuredImage})

    redirect("/")
}


export  async function handleDelete (courseId,formData){
    "use server"
    const data = await Course.findByIdAndDelete(courseId);
    redirect("/admin/course");
 }