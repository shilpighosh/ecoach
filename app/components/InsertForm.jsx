const InsertForm = ({ handleSubmit }) => {

    return (
        <form action={handleSubmit} className="max-w-md mx-auto mt-8" >
            <div className="mb-4">
                <label className="block text-grey-700 text-bold mb-2" htmlFor="title">
                    Title
                </label>
                <input type="text" id="title" name="title" className="w-full p-2 border rounded" placeholder="Enter title"/>
            </div>
            <div className="mb-4">
                <label className="block text-grey-700 text-bold mb-2" htmlFor="duration">
                   Duration
                </label>
                <input type="text" id="duration" name="duration" className="w-full p-2 border rounded" placeholder="Enter duration"/>
            </div>
            <div className="mb-4">
                <label className="block text-grey-700 text-bold mb-2" htmlFor="instructor">
                    instructor
                </label>
                <input type="text" id="instructor" name="instructor" className="w-full p-2 border rounded" placeholder="Enter instructor"/>
            </div>
            <div className="mb-4">
                <label className="block text-grey-700 text-bold mb-2" htmlFor="fee">
                    fee
                </label>
                <input type="text" id="fee" name="fee" className="w-full p-2 border rounded" placeholder="Enter fee"/>
            </div>
            <div className="mb-4">
                <label className="block text-grey-700 text-bold mb-2" htmlFor="discount_fee">
                    discount_fee
                </label>
                <input type="text" id="discount_fee" name="discount_fee" className="w-full p-2 border rounded" placeholder="Enter discount_fee"/>
            </div>
            <div className="mb-4">
                <label className="block text-grey-700 text-bold mb-2" htmlFor="description">
                    description
                </label>
                <input type="text" id="description" name="description" className="w-full p-2 border rounded" placeholder="description"/>
            </div>
            <div className="mb-4">
                <label className="block text-grey-700 text-bold mb-2" htmlFor="lang">
                    language
                </label>
                <input type="text" id="lang" name="lang" className="w-full p-2 border rounded" placeholder="Enter lang"/>
            </div>
            <div className="mb-4">
                <label className="block text-grey-700 text-bold mb-2" htmlFor="mode">
                    mode
                </label>
                <input type="text" id="mode" name="mode" className="w-full p-2 border rounded" placeholder="Enter mode(e.g online,offline etc)"/>
            </div>
            <div className="mb-4">
                <label className="block text-grey-700 text-bold mb-2" htmlFor="featured_image">
                    featured_image
                </label>
                <input type="file" id="featured_image" name="featured_image" className="w-full p-2 border rounded" placeholder="Enter featured_image"/>
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit

            </button>
         </form>
    );
};
export default InsertForm;