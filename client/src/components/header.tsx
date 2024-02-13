import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-12 bg-cyan-800 relative flex items-center space-x-8 justify-between">
      <p className="text-white flex pl-10">
        <Phone size={20} fill="black" /> (31) 3273-5710
      </p>
      <p className="text-white flex ">
        <Mail size={20} />
        contato@amaroantunesmourao.com.br
      </p>
      <div className="justify-between flex pr-10">
        <p className="text-white px-4">
          <a href="">
            <Instagram size={25} />
          </a>{" "}
        </p>
        <p className="text-white px-4">
          <a href="">
            <Facebook size={25} />
          </a>{" "}
        </p>
        <p className="text-white px-4">
          <a href="">
            <Linkedin size={25} />
          </a>{" "}
        </p>
      </div>
      {/* <Image src={} /> */}
    </header>
  );
};

export default Header;
