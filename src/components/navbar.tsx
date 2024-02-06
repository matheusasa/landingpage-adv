import Image from "next/image";
import logo from "../../assets/logo-aam-300x160.png";

const Nav = () => {
  return (
    <nav className="relative flex items-center w-full h-[100px] bg-white justify-between ">
      <div className="pl-20 w-full">
        <Image src={logo} alt="Logo" width={150} />
      </div>
      <div className=" w-full flex justify-end pr-20">
        <ul className="flex">
          <li className="px-4 font-bold text-2xl">
            <a href="">Inicio</a>
          </li>
          <li className="px-4 font-bold text-2xl">
            <a href="">Sobre</a>
          </li>
          <li className="px-4 font-bold text-2xl">
            <a href="">Contato</a>
          </li>
          <li className="px-4 font-bold text-2xl">
            <a href="">Serviços</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
