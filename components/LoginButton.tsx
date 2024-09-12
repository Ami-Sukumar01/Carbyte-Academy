"use client"; 

import { useRouter } from 'next/navigation';

const LoginButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/home'); // Redirect to /home
  };

  return (
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
          <button
            className="bg-white rounded w-[151.1px] h-[48.85px] p-[12.93px_49.55px] border-[1.62px] border-black transition-shadow duration-300 ease-in-out hover:shadow-[6px_6px_0_black]"
            onClick={handleClick}
          >
            <span className="font-inter text-custom leading-custom text-left">
              Login
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginButton;


