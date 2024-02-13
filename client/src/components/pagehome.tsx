import Image from "next/image";
import bgsite from "../../assets/bgsite.jpg";
import Button from "./button";
import { Scale } from "lucide-react";
import Card from "./card";
import { Form } from "./form";
import fundo2 from "../../assets/fundo2.jpg";
import CardAtual from "./cardatuacao";

const PageHome = () => {
  return (
    <>
      <div className="alo items-center w-full justify-center relative">
        <div className="text-white w-[90%] max-w-full h-[100px] absolute top-[33%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center ">
          <div className="w-[40%] relative top-[33%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center ">
            <h1 className="text-7xl font-bold pb-7">What is Lorem ipsum?</h1>
            <h2 className="text-2xl font-bold ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident dolores ab officiis. Suscipit, quos. Ducimus voluptatum
              blanditiis minus, vel doloremque error facilis exercitationem quo
              labore alias nam iure sit. Fugit.
            </h2>
            <div className="justify-center flex">
              <Button className="w-40 mt-6">Contato</Button>
            </div>
          </div>
          <div className="flex w-[80%] relative top-[33%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-between  pt-[3%]">
            <Card title="What is Lorem ipsum?"> </Card>
            <Card title="What is Lorem ipsum?">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur reprehenderit expedita, distinctio delectus dolores
              veniam commodi! Deserunt officiis alias nemo amet perferendis
              velit sit, iure reiciendis at nesciunt, ad placeat!{" "}
            </Card>
            <Card title="What is Lorem ipsum?">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur reprehenderit expedita, distinctio delectus dolores
              veniam commodi! Deserunt officiis alias nemo amet perferendis
              velit sit, iure reiciendis at nesciunt, ad placeat!{" "}
            </Card>
          </div>
        </div>
      </div>
      <div className="h-[600px] bg-white w-full">
        <div className="flex ">
          <div className="flex flex-col w-1/2 pl-[200px] pt-[150px]">
            {" "}
            <h1 className="text-4xl font-bold">Sobre</h1>
            <p className="text-xl pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque provident maxime totam nam voluptatem repudiandae quae?
              Maxime placeat, autem aliquid earum ut voluptatem ad dolorum
              perspiciatis et eum amet eos.
            </p>
          </div>
          <div className="pt-10 pl-10">
            <Image src={fundo2} alt="alt" width={800} height={300} />
          </div>
        </div>
      </div>
      <div className="h-[1000px] bg-cyan-800 w-full">
        <div className="flex flex-col items-center justify-center pt-[100px] w-full">
          <div className="text-white font-bold flex flex-col w-[40%] justify-center items-center">
            <h1 className="text-4xl">Areas de atuacao</h1>
            <p className="pt-10 text-xl">
              Saiba em quais areas podemos auxiliar voce e sua empresa!
            </p>
          </div>
        </div>
          <div className="flex p-4 ">
            <CardAtual title="Familia"> Alo</CardAtual>
            <CardAtual title="Familia"> Alo</CardAtual>
            <CardAtual title="Familia"> Alo</CardAtual>
          </div>
          <div className="flex p-4">
            <CardAtual title="Familia"> Alo</CardAtual>
            <CardAtual title="Familia"> Alo</CardAtual>
            <CardAtual title="Familia"> Alo</CardAtual>
          </div>
        </div>
      
      <div className="h-[150px] bg-cyan-800 flex justify-center items-center ">
        <h1 className="text-4xl text-white font-bold ">Nossa Localização</h1>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.911285114659!2d-46.54072872374268!3d-23.679130365931165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce430bc7b623bf%3A0x74affffd4aca71a9!2sTOTVS%20Sudeste%20Meridional%20-%20Unidade%20Serra%20do%20Mar!5e0!3m2!1spt-BR!2sbr!4v1707221545281!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
      <div className="h-full bg-cyan-800 w-full">
        <div className="flex justify-center items-center pt-[60px] text-white">
          <h1 className="text-4xl font-bold">Entre em contato conosco!</h1>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default PageHome;
