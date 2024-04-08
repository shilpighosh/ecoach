import DbConnect from "@/app/DbConnect";
import { handleSubmit } from "@/app/actions";
import InsertForm from "@/app/components/InsertForm";


const InsertPage = async () => {
    await DbConnect();
   
    return (
        <div className="flex px-16 mt-10">
            <div className="w-1/4 mx-auto">
                <InsertForm handleSubmit={handleSubmit} />
            </div>
        </div>
    )
}
// shilpi ghosh

export default InsertPage;