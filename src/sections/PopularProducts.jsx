import { products } from "../constants/constants.index"
import PopularCard from "../components/PopularCard"
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col gap-5 justify-start">
        <h2 className="font-palanquin text-4xl font-bold">
          Our <span> Popular </span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 text-slate-gray font-montserrat">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat illum voluptatem.</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
        {
          products.map((product)=>(
            <div key={product.name}>
              <PopularCard imgURL={product.imgURL}
              name={product.name}
              price={product.price}/>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default PopularProducts