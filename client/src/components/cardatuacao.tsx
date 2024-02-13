import React, { ReactNode } from "react";
import { Scale } from "lucide-react";

interface CardAtualProps {
  children: ReactNode;
  title: string;
}

const CardAtual: React.FC<CardAtualProps> = ({ children, title }) => {
  return (
    <div className="bg-white hover:scale-105 duration-300 rounded-lg h-[200px] justify-between items-center w-[300px] p-3 flex  border-white">
      <div>
        <h1 className="text-white font-bold text-2xl">{title}</h1>
        <h1 className="pt-5">{children}</h1>
      </div>
    </div>
  );
};

export default CardAtual;
