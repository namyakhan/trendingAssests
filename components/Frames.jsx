import Image from "next/image";
import { Data } from "../data/contextProvider";

const CardMapping = () => {
  return (
    <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 lg:gap-5 2xl:grid 2xl:grid-cols-5 2xl:gap-10 justify-items-center ">
      {Data.map((coins) => (
        <div key={coins.id} className="mt-10 md:mt-5 flex flex-col items-center ">
          <Image
            src={coins.url}
            alt="Picture of the author"
            width={100}
            height={100}
          />
          <div className="cards w-[290px] h-[350px] -mt-12">
            {/* Coin*/}
            <div className="pt-20 p-5 flex flex-col items-center justify-center">
              <h4>{coins.coin}</h4>
              <div className="rectangle mt-3 w-full h-[40px]">
                <div className="flex flex-row items-center justify-between px-14 p-2">
                  <h2>{coins.price1}</h2>
                  {/* <h3>{coins.rate}</h3> */}
                  {coins.rate < 0 ? (
                    <h3 className="red">{coins.rate}%</h3>
                  ) : (
                    <h3 className="green">{coins.rate}%</h3>
                  )}
                </div>
              </div>
              {/* Price */}
              <h5>Price</h5>
              <div className="rectangle  w-full h-[40px]">
                <div className="flex flex-row items-center justify-center px-10 p-2">
                  <h2>$60,000</h2>
                </div>
              </div>
              {/* TVL */}
              <h5>TVL</h5>
              <div className="rectangle  w-full h-[40px]">
                <div className="flex flex-row items-center  justify-evenly px-10 p-2">
                  <Image
                    src={coins.url1}
                    alt="Picture of the author"
                    width={22}
                    height={22}
                  />
                  <Image
                    src={coins.url2}
                    alt="Picture of the author"
                    width={22}
                    height={22}
                  />
                  <Image
                    src={coins.url3}
                    alt="Picture of the author"
                    width={22}
                    height={22}
                  />
                </div>
              </div>
              <h5>Popular Pairs</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div className="w-screen h-full bg-darkBlue px-10">
      <div className="flex flex-row justify-center  items-center ">
        <div className="flex flex-col h-full lg:h-screen w-screen items-center 2xl:items-start justify-center">
          {/* Heading */}

          <div className="flex flex-row items-center justify-center space-x-2 mt-10 xl:mt-0">
            <Image
              src="/images/activity.png"
              alt="Picture of the author"
              width={20}
              height={20}
            />
            <h1>Trending Assets</h1>
          </div>

          <CardMapping />
        </div>
      </div>
    </div>
  );
};

export default Home;
