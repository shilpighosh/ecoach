import React from 'react';

const CourseCard = ({data}) => {
    return(
        <div className="border p-4 mb-4">
            <img src={
                data.featuredImage ? `/course_image/${data.featuredImage}`:"https://placehold.co/300?text=image+not+available"
            } alt={data.title} className="mb-2 w-full h-40 object-cover" />
             <h2 className="text-xl font-bold mb-2">{data.title}</h2>
             <p className="text-grey-700 mb-2">
                Duration: {data.duration} | Instructor: {data.instructor}
             </p>
             <p className="text-grey-700 mb-2">Fee: ${data.fee}</p>
             <p className="text-grey-700 mb-2">Discounted Fee: ${data.discountFee}</p>
             <p className="text-grey-700 mb-2">Language: {data.lang}</p>
             <p className="text-grey-700 mb-2">Mode: {data.mode}</p>
             <p className="text-grey-700 mb-2">{data.description}</p>
        </div>
    );
};

export default CourseCard;