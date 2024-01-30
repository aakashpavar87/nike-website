import { services } from "../constants/constants.index"
import ServiceCard from "../components/ServiceCard"
const Services = () => {
  return (
    <section id="services" className="max-container flex flex-wrap gap-9 justify-center">
      {
        services.map((service,index) => (
          <ServiceCard key={service.label} {...service} />
          // <ServiceCard key={service.label} image={service.image} label={service.label} subtext={service.subtext} />
        ))
      }
    </section>
  )
}

export default Services