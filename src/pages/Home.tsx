import { Card, CardBody, CardFooter, CardHeader } from "@/components/ui/card";
import bg1 from "@/assets/images/cards/card-1.png";
import bg2 from "@/assets/images/cards/card-2.png";
import headBg1 from "@/assets/images/cards/header/card-head-bg-1.png";
import headBg2 from "@/assets/images/cards/header/card-head-bg-2.png";
import headBg3 from "@/assets/images/cards/header/card-head-bg-3.png";
import headBg4 from "@/assets/images/cards/header/card-head-bg-4.png";
import headBg5 from "@/assets/images/cards/header/card-head-bg-5.png";
import headBg6 from "@/assets/images/cards/header/card-head-bg-6.png";
import miniLogo from "@/assets/images/common/mini-logo.png";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import FeatureBadge from "@/components/ui/FeatureBadge";

const Home = () => {
  const [count, setCount] = useState(25);

  return (
    <>
      <main className="flex flex-wrap items-center justify-center gap-5 ">
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
          <CardBody>
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

        <Card bgImage={bg2} className="bg-black">
          <CardHeader bgImage={headBg2}>
            <h1 className="uppercase">Visitor 3 Day Access Ticket</h1>
            <h3 className="uppercase text-sm text-[#E6FF00] flex gap-1 items-center">
              VIEW DETAILS{" "}
              <span>
                <ArrowRight size={18} />
              </span>{" "}
            </h3>
          </CardHeader>
          <CardBody>
            <h2 className="text-sm">
              Visitor Passes provide{" "}
              <span className="uppercase font-bold text-[#26ff51]">
                3 days access
              </span>{" "}
              to GITEX NIGERIA exhibition and all free conference
            </h2>

            <div className="flex flex-wrap">
              <FeatureBadge text="Access to ConneXions & Investor Lounge" />
              <FeatureBadge text="Network Events" />
              <FeatureBadge text="All Conference Tracks" />
              <FeatureBadge text="All Masterclasses " />
              <FeatureBadge text="3 Days Access to the Show" />
              <FeatureBadge text="Access to Dubai Internet City Lounge" />
            </div>
          </CardBody>

          {/* line-separation */}
          <div
            className="h-[1px] w-[340px] relative left-[8%]"
            style={{
              background: "linear-gradient(to right, #fff, #FFFFFF05)",
            }}
          ></div>

          <CardFooter>
            <div className="relative top-1 flex items-center justify-between">
              <div>
                <h1 className="font-bold text-white relative top-1">FREE</h1>
                <h1 className="text-white/60">Incl.19% VAT</h1>
              </div>

              <div>
                <button className="px-3 py-[5px] bg-white text-black rounded-sm text-xs font-bold">
                  BUY NOW
                </button>
              </div>
            </div>
          </CardFooter>
        </Card>

        <Card bgImage={bg1}>
          <CardHeader bgImage={headBg3}>
            <h1 className="uppercase">Visitor 3 Day Access Ticket</h1>
            <h3 className="uppercase text-sm text-[#E6FF00] flex gap-1 items-center">
              VIEW DETAILS{" "}
              <span>
                <ArrowRight size={18} />
              </span>{" "}
            </h3>
          </CardHeader>
          <CardBody>
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

        <Card bgImage={bg1}>
          <CardHeader bgImage={headBg4}>
            <h1 className="uppercase">Visitor 3 Day Access Ticket</h1>
            <h3 className="uppercase text-sm text-[#E6FF00] flex gap-1 items-center">
              VIEW DETAILS{" "}
              <span>
                <ArrowRight size={18} />
              </span>{" "}
            </h3>
          </CardHeader>
          <CardBody>
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

        <Card bgImage={bg1}>
          <CardHeader bgImage={headBg5}>
            <h1 className="uppercase">Visitor 3 Day Access Ticket</h1>
            <h3 className="uppercase text-sm text-[#E6FF00] flex gap-1 items-center">
              VIEW DETAILS{" "}
              <span>
                <ArrowRight size={18} />
              </span>{" "}
            </h3>
          </CardHeader>
          <CardBody>
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

        <Card bgImage={bg1}>
          <CardHeader bgImage={headBg6}>
            <h1 className="uppercase">Visitor 3 Day Access Ticket</h1>
            <h3 className="uppercase text-sm text-[#E6FF00] flex gap-1 items-center">
              VIEW DETAILS{" "}
              <span>
                <ArrowRight size={18} />
              </span>{" "}
            </h3>
          </CardHeader>
          <CardBody>
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
      </main>

      <footer
        className="h-20 absolute z-10 bottom-[-80px] left-0 w-full"
        style={{
          background: "linear-gradient(to right, #299D3F, #123F22)",
        }}
      ></footer>
    </>
  );
};

export default Home;
