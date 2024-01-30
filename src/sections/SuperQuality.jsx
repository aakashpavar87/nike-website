import { shoe8 } from "../assets/images"
import Button from "../components/Button"
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between align-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      <h1 className="mt-10 font-palanquin text-4xl  font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">We Provide</span>
          <span className="text-coral-red">Super </span>
          <br />
          Quality 
          <span className="text-coral-red">Shoes </span>
        </h1>
        <p className="mt-4 info-text lg:max-w-lg">Discover stylish Nike arrivals, quality comfort and innovation for your active life</p>
        <p className="mt-4 info-text lg:max-w-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quidem perferendis voluptatum? Aut alias incidunt reiciendis veritatis distinctio autem quas quam eaque nulla.</p>
        <div className="mt-8">
          <Button label="View Details"/>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} 
        alt="Shoe Image" 
        srcset=""
        width={570}
        height={522}
        className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality