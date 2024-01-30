import { reviews } from "../constants/constants.index"
import ReviewCard from "../components/ReviewCard"
const CustomerReviews = () => {
  return (
    <section id="customer-reviews" className="max-container flex items-center flex-col">
      <h3 className="text-bold text-4xl font-pallenquin ">
        What Our <span className="text-coral-red">Customers </span> Say
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda minima fugiat culpa nesciunt aperiam. Atque, quibusdam modi
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard 
          {...review}
          />
        ))}

      </div>
    </section>
  )
}

export default CustomerReviews