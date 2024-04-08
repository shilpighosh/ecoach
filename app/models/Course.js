import mongoose from "mongoose"
const  CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    duration: {
        type: String,
        required:true,
    },
     instructor: {
        type: String,
        required:true,
    },
    fee: {
        type: Number,
        required:true,
    },
    discountFee: {
        type: Number,
        required:true,
    },
    description: {
        type: String,
        required: true,
    },
    lang: {
        type: String,
        required:true,
    },
    mode: {
        type: String,
        required:true,
    },
    featuredImage: {
        type: String,
        required:true,
    },

})

export default mongoose.models.Course || mongoose.model("Course",CourseSchema)