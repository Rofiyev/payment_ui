import { navigationLinks } from "../util/constants";
import { styles } from "../util/styles";
import logo from '../image/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [togglNav, setToggleNav] = useState(false);
  const [active, setActive] = useState('home')

  const toggleMenu = () => setToggleNav(prev => !prev);
  const activeNavHandler = id => { setActive(id); toggleMenu() };

  return (
    <div className={`w-full py-6 text-white ${styles.flexBetween}`}>
      {/* === Logo === */}
      <img className={`w-[110px] h-[65px] object-cover cursor-pointer`} src={logo} alt="Logo" />

      {/* === Header Links === */}
      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navigationLinks.map(({ id, name }, i) => (
          <li key={i}
            className={`
            ${i === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'} 
            ${id === active ? 'text-white font-semibold' : 'text-lightWhite'} 
            font-montserrat font-normal cursor-pointer text-[16px] hover:text-lightWhite transition-all duration-300`}
            onClick={() => activeNavHandler(id)}
          >
            <a href={`#${id}`}>{name}</a>
          </li>
        ))}
      </ul>

      {/* Header Responsive Bars Menu */}
      <div className="md:hidden flex flex-1 justify-end items-start">
        <FontAwesomeIcon icon={togglNav ? faXmark : faBarsStaggered} size="xl" onClick={toggleMenu} className="transition-all duration-300 cursor-pointer" />

        <div className={`${!togglNav ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 left-0 z-50 my-8 w-full sidebar bg-[#090c18] sm:bg-[#0f111d]`}>
          <ul className="list-none flex items-center flex-col gap-2 flex-1">
            {navigationLinks.map(({ id, name }, i) => (
              <li key={i}
                className={`
                ${id === active ? 'text-white font-semibold' : 'text-lightWhite'} 
                font-montserrat font-normal py-1 cursor-pointer text-[16px] hover:text-lightWhite transition-all duration-300`}
                onClick={() => activeNavHandler(id)}
              >
                <a href={`#${id}`}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;