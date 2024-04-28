import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex items-center justify-center group gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all duration-300 disabled:scale-100 disabled:opacity-65 disabled:cursor-not-allowed dark:bg-white dark:bg-opacity-10"
    >
      {pending ? (
        <div className="h-5 w-5 rounded-full border-b-2 border-white animate-spin"></div>
      ) : (
        <>
          Submit{' '}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
