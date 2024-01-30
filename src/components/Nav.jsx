import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/constants.index";
const Nav = () => {
  return (
    <header className="padding-x w-full py-8 absolute z-10 ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Header Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/"
              className="font-montserrat leading-normal text-lg text-slate-700"
            >
              SignIn/Register
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-montserrat leading-normal text-lg text-slate-700"
            >
              Explore Now
            </a>
          </li>
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
