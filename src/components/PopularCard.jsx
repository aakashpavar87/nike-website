import { star } from "../assets/icons"
const PopularCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} 
        className="h-[280px] w-[280px]"
        />
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} width={24} height={24} alt="rating" />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
        </div>
        <h3 className="font-semibold text-slate-900 text-xl">{name}</h3>
        <h3 className="font-semibold text-coral-red">{price}</h3>

    </div>
  )
}

export default PopularCard