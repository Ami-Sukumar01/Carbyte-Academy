
import { Header } from "../../components/LoginHeader";
import HeaderMain from "../../components/LoginBody";
import LoginButton from "../../components/LoginButton";


export default function Login() {
 return (
   <div className="flex flex-col h-screen">
     <Header />
     <div>
       <HeaderMain />
       <LoginButton />
     </div>
   </div>
 );
}



