import { useState } from "react";

const Coracao = () => {
  const [preenchido, setPreenchido] = useState(false);

  const alternarPreenchimento = () => {
    setPreenchido(!preenchido);
  };

  const estiloCoracao = preenchido ? "text-red-500" : "text-gray-500";

  return (
    <div>
      <svg
        onClick={alternarPreenchimento}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 cursor-pointer ${estiloCoracao}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
    </div>
  );
};

export default Coracao;
