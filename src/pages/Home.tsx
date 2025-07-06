import { Card, CardBody, CardFooter, CardHeader } from "@/components/ui/card";
import bg1 from "@/assets/images/cards/card-1.png";
import headBg1 from "@/assets/images/cards/header/card-head-bg-1.png";
import miniLogo from "@/assets/images/common/mini-logo.png";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import FeatureBadge from "@/components/ui/FeatureBadge";
import { cards } from "@/data/cardData";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(25);

  const onClick = () => navigate("/login");
  return (
    <>
      <main className="flex flex-wrap items-center justify-center gap-5">
        {/* Card-01 */}
        <Card bgImage={bg1}>
          <CardHeader bgImage={headBg1}>
            <h1 className="uppercase">Visitor 3 Day Access Ticket</h1>
            <h3 className="uppercase text-sm text-[#E6FF00] flex gap-1 items-center">
              VIEW DETAILS{" "}
              <span>
                <ArrowRight size={18} />
              </span>{" "}
            </h3>
          </CardHeader>
          <CardBody className="flex flex-col justify-center py-12 gap-12">
            <h2 className="text-sm">
              Visitor Passes provide{" "}
              <span className="uppercase font-bold text-[#26ff51]">
                3 days access
              </span>{" "}
              to GITEX NIGERIA exhibition and all free conference
            </h2>
            <img src={miniLogo} alt="Mini logo" className="w-35" />
          </CardBody>

          {/* line-separation */}
          <div
            className="h-[1px] w-[340px] relative left-[8%]"
            style={{
              background: "linear-gradient(to right, #fff, #FFFFFF05)",
            }}
          ></div>

          <CardFooter>
            <div className="flex items-center justify-between">
              <div className="flex gap-1 items-center">
                <h1 className="font-bold text-white">
                  USD <span className="text-gray-400 line-through">43</span>
                </h1>
                <h1 className="bg-black text-white border-1 rounded-sm font-bold py-[1px] px-[2px]">
                  32.5
                </h1>
                <h1 className="text-white/60">Incl.20% VAT</h1>
              </div>

              <div className="flex">
                <button
                  className="px-2 border-1 border-white text-white font-bold rounded-l-sm cursor-pointer"
                  onClick={() => setCount(count - 1)}
                >
                  -
                </button>
                <div className="bg-white text-black px-2 flex items-center justify-center font-bold">
                  {count}
                </div>
                <button
                  className="px-2 border-1 border-white text-white font-bold rounded-r-sm cursor-pointer"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </CardFooter>
        </Card>

        {/* Card 02-05 loop */}
        {cards.map((card, idx) => (
          <Card key={idx} bgImage={card.bgImage} className="bg-black">
            <CardHeader bgImage={card.headBg}>
              <h1 className="uppercase">{card.title}</h1>
              <h3 className="uppercase text-sm text-[#E6FF00] flex gap-1 items-center">
                VIEW DETAILS
                <ArrowRight size={18} />
              </h3>
            </CardHeader>

            <CardBody>
              <h2 className="text-sm">
                {card.title.includes("Visitor") ? (
                  <>
                    Visitor Passes provide{" "}
                    <span className="uppercase font-bold text-[#26ff51]">
                      3 days access
                    </span>{" "}
                    to GITEX NIGERIA exhibition and all free conference
                  </>
                ) : (
                  "Enjoy premium access to exclusive GITEX Nigeria experiences."
                )}
              </h2>

              <div className="flex flex-wrap gap-1">
                {card.features.map((feature, index) => (
                  <FeatureBadge
                    key={index}
                    text={feature.text}
                    isVisible={feature.isVisible}
                  />
                ))}
              </div>
            </CardBody>

            <div
              className="h-[1px] w-[340px] relative left-[8%]"
              style={{
                background: "linear-gradient(to right, #fff, #FFFFFF05)",
              }}
            ></div>

            <CardFooter>
              <div className="relative top-1 flex items-center justify-between">
                <div>
                  <h1 className="font-bold text-white relative top-1">
                    {card.price}
                  </h1>
                  <h1 className="text-white/60">Incl.19% VAT</h1>
                </div>
                <button
                  className="px-3 py-[5px] bg-white text-black rounded-sm text-xs font-bold cursor-pointer"
                  onClick={onClick}
                >
                  BUY NOW
                </button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </main>

      <footer className="h-20 fixed z-10 bottom-[0px] left-0 w-full bg-gradient-green text-white flex items-center justify-end gap-5 p-10">
        <h1>
          Total: <span className="font-bold">EUR 0</span> Incl. 19% VAT <br />{" "}
          <span className="text-sm text-[#FFFFFFCF]">View Ticket summary</span>
        </h1>
        <button
          className="px-3 py-[5px] bg-white text-[#125113] rounded-sm text-xs font-bold cursor-pointer"
          onClick={onClick}
        >
          BUY NOW
        </button>
      </footer>
    </>
  );
};

export default Home;
