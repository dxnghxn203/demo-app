import { redirect } from "next/navigation";

// authentication
const isAuth = true 

export default function HomePage(){
    if (!isAuth){
        redirect('/login')
    }

    return (
        <div>
            Home page
        </div>
    );
}