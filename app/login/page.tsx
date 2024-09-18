"use client"
import { Header } from "../../components/LoginHeader";
import HeaderMain from "../../components/LoginBody";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

//import LoginButton from "../../components/LoginButton";


export default function LoginPage() {
  const { data: session, status } = useSession()

  const router = useRouter()
  const redirectHome = () => {
    router.push('/home')
  }

  //If user sesssion redirect to /home (will be available in the future)
  // if (session) {
  //   return redirectHome()
  // } else {
  // }

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div>
        <HeaderMain />

        <div className="flex items-center justify-center min-h-screen">
          <div
            className="bg-white text-black rounded shadow border border-black w-[457.8px] h-[218.64px]"
          >
            <h2
              className="font-inter pt-5 pb-2 text-center text-[19.39px] leading-[30.16px]"
            >
              Welcome to the learning platform
            </h2>
            <p className="font-inter pr-5 pl-5 text-center mb-6 text-custom-gray">
              After clicking “login” you will be redirected to the
              <br />
              Microsoft page
            </p>
            {/* Flex container to center the button */}
            <div className="flex justify-center">
              <>

                {session ? (

                  <button
                    className="bg-white rounded w-[151.1px] h-[48.85px] p-[12.93px_49.55px] border-[1.62px] border-black transition-shadow duration-300 ease-in-out hover:shadow-[6px_6px_0_black]"
                    onClick={() => redirectHome()}
                  >
                    <span className="font-inter text-custom leading-custom text-left">
                      Continue
                    </span>
                  </button>


                ) : (
                  <button
                    className="bg-white rounded w-[151.1px] h-[48.85px] p-[12.93px_49.55px] border-[1.62px] border-black transition-shadow duration-300 ease-in-out hover:shadow-[6px_6px_0_black]"
                    onClick={() => signIn()}
                  >
                    <span className="font-inter text-custom leading-custom text-left">
                      Login
                    </span>
                  </button>
                )}
              </>



            </div>
            <div className="flex items-center  justify-centerw-full ">

              {session ? (
                <>
                  <p className="text-center flex-grow">Hello, {session.user?.email}</p>
                  <button onClick={() => signOut()} className="border p-1 rounded hover:bg-violet-300">Logout</button> {/* Temporary */}
                </>

              ) : (
                <p className="text-center w-full"></p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );


}



