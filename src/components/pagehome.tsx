import Image from "next/image";
import bgsite from "../../assets/bgsite.jpg";
import Button from "./button";
import { Scale } from "lucide-react";
import Card from "./card";

const PageHome = () => {
  return (
    <div className="alo items-center w-full justify-center relative">
      <div className="text-white w-[90%] max-w-full h-[100px] absolute top-[33%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center ">
        <div className="w-[70%] relative top-[33%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center ">
          <h1 className="text-7xl font-bold pb-7">What is Lorem ipsum?</h1>
          <h2 className="text-2xl font-bold ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            dolores ab officiis. Suscipit, quos. Ducimus voluptatum blanditiis
            minus, vel doloremque error facilis exercitationem quo labore alias
            nam iure sit. Fugit.
          </h2>
          <div className="justify-center flex">
            <Button className="w-40 mt-6">Contato</Button>
          </div>
        </div>
        <div className="flex w-[85%] relative top-[33%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-between  pt-[3%]">
          <Card title="What is Lorem ipsum?">
            {" "}
            
          </Card>
          <Card title="What is Lorem ipsum?">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur reprehenderit expedita, distinctio delectus dolores
            veniam commodi! Deserunt officiis alias nemo amet perferendis velit
            sit, iure reiciendis at nesciunt, ad placeat!{" "}
          </Card>
          <Card title="What is Lorem ipsum?">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur reprehenderit expedita, distinctio delectus dolores
            veniam commodi! Deserunt officiis alias nemo amet perferendis velit
            sit, iure reiciendis at nesciunt, ad placeat!{" "}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PageHome;
