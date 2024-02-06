import React, { ReactNode } from "react";
import { Scale } from "lucide-react";

interface CardProps {
  children: ReactNode;
  title: string;
}

const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className="bg-cyan-800 h-[200px] justify-between items-center w-[25%] flex border-2 rounded-md border-white">
      <Scale size={100} />
      <div>
        <h1 className="text-white font-bold text-2xl">{title}</h1>
        <h1 className="pt-5">{children}</h1>
      </div>
    </div>
  );
};

export default Card;
