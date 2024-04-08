import "../../globals.css";
import AdminHeader from "../../components/AdminHeader"



export const metadata = {
    title:"admin Panel | ecoach",
    description:"testing work"
}

export default function AdminLayout({children}){
    return(
        <html lang="en">
            <body>
                <AdminHeader/>
                {children}
            </body>
        </html>
    )
}