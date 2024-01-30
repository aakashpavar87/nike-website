
const ServiceCard = ({imgURL, label, subtext}) => {

  return (
    <div className="flex flex-col sm:w-[350px] sm:min-w-[350px] rounded-[20%] shadow-3xl px-10 py-16">
        <div className="flex justify-center items-center w-11 h-11 bg-coral-red rounded-full">
            <img src={imgURL} alt={label} width={24} height={24} srcset="" />
        </div>
        <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
            {label}
        </h3>
        <p className="mt-3 break-words font-montserrat leading-normal">
            {subtext}
        </p>
    </div>
  )
}

export default ServiceCard