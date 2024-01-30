import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { statistics } from "../constants/constants.index"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes } from "../constants/constants.index"
import { bigShoe1 } from "../assets/images"
const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-tight font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span>
          Shoes
        </h1>
        <p className="font-montserrat leading-7 text-slate-grey pb-16">Discover stylish Nike arrivals, quality comfort and innovation for your active life</p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {
            statistics.map((stat, index) => (
              <div key={index}>
                <p className="font-montserrat text-4xl font-bold text-slate-900">{stat.value}</p>
                <p>{stat.label}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-10 bg-primary bg-hero">
        <img src={bigShoeImg} alt="shoe collection" width={610} height={500} className="object-contain z-10 relative max-sm:h-[510px]" />
      <div className="flex sm:gap-6 gap-4 absolute -bottom-[8%] sm:left-[12%] max-sm:px-10">
        {
          shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard 
              imageURL={shoe} 
              changeBigShoeImage={(shoeImg)=>setbigShoeImg(shoeImg)} 
              bigShoeImage={bigShoeImg} />
            </div>
          ))
        }
      </div>
      </div>
    </section>
  )
}

export default Hero