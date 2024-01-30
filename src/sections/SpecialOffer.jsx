import {offer} from "../assets/images"
import {arrowRight} from "../assets/icons"
import Button from "../components/Button"
const SpecialOffer = () => {
  return (
    <section id="special-offer" className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer Image" width={744} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
      <h1 className="mt-10 font-palanquin text-4xl  font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">Special</span>
          <span className="text-coral-red">Offer </span>
        </h1>
        <p className="mt-4 info-text lg:max-w-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quidem perferendis voluptatum? Aut alias incidunt reiciendis veritatis distinctio autem quas quam eaque nulla.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight}/>
          <Button label="Learn More" backgroundColor="bg-white" textColor="text-slate-600" borderColor="border-slate-gray" iconURL={arrowRight}/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer