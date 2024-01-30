import Button from "../components/Button"
const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex flex-col justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl font-bold font-palanquin leading-[68px]">Sign Up from <span className="text-coral-red">Updates</span> and Newslatter</h3>
      <div className="lg:max-w-[50%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input"  />

        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe