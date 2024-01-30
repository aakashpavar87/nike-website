import {Hero, SuperQuality, Subscribe, CustomerReviews, Footer, Services, PopularProducts, SpecialOffer} from "./sections"
import Nav from "./components/Nav"

export default function App() {
  return (
    <>
    <main className="relative">
      <Nav />
      <section
        className="xl:padding-l wide:padding-r padding-b"
      >
        <Hero />
      </section>
      <section
        className="padding"
      >
        <PopularProducts />
      </section>
      <section
        className="padding"
      >
        <SuperQuality />
      </section>
      <section
        className="padding-x py-10" 
      >
        <Services />
      </section>
      <section
        className="padding"
      >
        <SpecialOffer />
      </section>
      <section
        className="padding"
        
      >
        <CustomerReviews />
      </section>
      <section
        className="padding"
      >
        <Subscribe />
      </section>
      <section
        className="padding w-full bg-black"
      >
        <Footer />
      </section>
    </main>
    </>
  )
}
