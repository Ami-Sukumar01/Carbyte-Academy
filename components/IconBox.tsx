import { ReactNode } from 'react';

type IconBoxProps = {
  icon: ReactNode;
};

const IconBox = ({ icon }: IconBoxProps) => (
  <div className='flex w-[52px] h-[52px] shrink-0 grow-0 items-center justify-center rounded-[30px] bg-white '>
    {icon}
  </div>
);

IconBox.displayName = 'IconBox';
export default IconBox;

