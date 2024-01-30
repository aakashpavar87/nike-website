import { copyrightSign } from "../assets/icons"
import {footerLogo} from "../assets/images"
import { footerLinks, socialMedia } from "../constants/constants.index"
const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} alt="footer Image" />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find your perfect size in Store. Get rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {
              socialMedia.map((icon) => (
                <div className="flex justify-center bg-white items-center w-10 h-10 rounded-full">
                  <img src={icon.src} alt={icon.alt} width={25} height={25} />
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex flex-1 lg:gap-10 gap-20 flex-wrap justify-between">
            {
              footerLinks.map((section) => (
                <div key={section}>
                  <h4 className="text-white font-montserrat text-2xl leading-normal mb-6 font-medium">
                    {section.title}
                  </h4>
                  <ul>
                    {section.links.map((link) => (
                      <li key={link} className="text-white mt-3 font-montserrat leading-normal hover:text-slate-gray cursor-pointer">
                        <a>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copyright" width={20} height={20} className="rounded-full m-0" />
          <p>Copyright. All Rights Reserved</p>
        </div>
        <p className="font-montserrat text-slate-gray cursor-pointer">Terms & Conditions</p>
      </div>
      <div className="w-full">
        <p className="text-center text-white-400">Made by Aakash with 💛</p>
      </div>
    </footer>
  )
}
export default Footer