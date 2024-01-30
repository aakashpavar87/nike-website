import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
    return (
        <div className="flex flex-col max-w-sm justify-center items-center">
            <img src={imgURL} alt="Customer Image" height={150} width={120} className="rounded-full object-cover" />
            <p className="info-text font-montserrat">{feedback}</p>
            <div>
                <img src={star} alt="" width={30} height={30} className="object-contain m-0" />
                <p className="mt-6 w-sm text-center info-text" >({rating})</p>
            </div>
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
        </div>
    )
}

export default ReviewCard