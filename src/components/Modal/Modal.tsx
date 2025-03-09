import { FC, ReactNode } from "react";

const Modal: FC<{
  isOpen: boolean;
  children: ReactNode;
}> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="z-50 text-sm sm:text-base  fixed inset-0 flex items-center justify-center bg-black/70  px-4 sm:px-0">
      <div className="bg-white p-4 rounded-lg shadow-lg w-96 md:w-2/3 md:max-h-2/3 lg:w-96 ">
        {children}
      </div>
    </div>
  );
};

export default Modal;
