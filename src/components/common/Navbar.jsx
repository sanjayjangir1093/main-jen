
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import ate_logo from "../../assets/Images/ate_logo.png"

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* <h1 className="text-xl font-bold">Logo</h1> */}
        <Link to="/">
          <img src={ate_logo} alt="Logo" className="h-10 w-auto ml-6" /> {/* Adjust height if needed */}
        </Link>

        <ul className="flex space-x-6 mr-6">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            // { name: "Login", path: "/" },
            // { name: "Register", path: "/sign-up" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setActive(item.path)}
                className={`relative px-4 py-2 ${
                  active === item.path
                    ? "text-purple-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {item.name}
                {active === item.path && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-600"></span>
                )}
              </Link>
            </li>
          ))}
              <li>
            <Link
              to="/login"
              onClick={() => setActive("/")}
              // className={`px-5 py-2 rounded-sm font-semibold ${
                className={`w-[73px] h-[32px] px-[15px] py-[4px] gap-[8px] rounded-[4px] border border-[1px] 
                  ${active === "/" ? "bg-[#4D008C] text-white shadow-md" : "bg-purple-700 text-white"
                }`}
            >
              Log in
            </Link>
          </li>

          {/* Register Button */}
          <li>
            <Link
              to="/sign-up"
              onClick={() => setActive("/sign-up")}
              className={`w-[89px] h-[32px] px-[15px] py-[4px] gap-[10px] rounded-[4px] border border-[1px]${
                active === "/sign-up"
                  ? "bg-[#D9D9D9] text-gray-700 shadow-md"
                  : "bg-white text-gray-700"
              }`}
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
// import { Menu, X } from "lucide-react"; // For mobile menu icons
// import ate_logo from "../../assets/Images/ate_logo.png";

// const Navbar = () => {
//   const location = useLocation();
//   const [active, setActive] = useState(location.pathname);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="ml-4">
//           <img src={ate_logo} alt="Logo" className="h-10 w-auto" />
//         </Link>

//         {/* Hamburger Menu (Mobile) */}
//         <button
//           className="lg:hidden block text-gray-700 mr-4"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>

//         {/* Navigation Links */}
//         <ul
//           className={`lg:flex space-x-6 items-center mr-6 ${
//             isMenuOpen
//               ? "absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4"
//               : "hidden lg:flex"
//           }`}
//         >
//           {[
//             { name: "Home", path: "/" },
//             { name: "About", path: "/about" },
//           ].map((item) => (
//             <li key={item.name}>
//               <Link
//                 to={item.path}
//                 onClick={() => {
//                   setActive(item.path);
//                   setIsMenuOpen(false);
//                 }}
//                 className={`relative px-4 py-2 block ${
//                   active === item.path
//                     ? "text-purple-600 font-semibold"
//                     : "text-gray-700"
//                 }`}
//               >
//                 {item.name}
//                 {active === item.path && (
//                   <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-600"></span>
//                 )}
//               </Link>
//             </li>
//           ))}

//           {/* Login Button */}
//           <li>
//             <Link
//               to="/login"
//               onClick={() => {
//                 setActive("/");
//                 setIsMenuOpen(false);
//               }}
//               className="w-[78px] h-[34px] px-[15px] py-[4px] gap-[8px] rounded-[4px] border border-[1px] 
//                   bg-[#4D008C] text-white shadow-md block text-center"
//             >
//               Login
//             </Link>
//           </li>

//           {/* Register Button */}
//           <li>
//             <Link
//               to="/sign-up"
//               onClick={() => {
//                 setActive("/sign-up");
//                 setIsMenuOpen(false);
//               }}
//               className="w-[89px] h-[32px] px-[15px] py-[4px] gap-[10px] rounded-[4px] border border-[1px] 
//                   bg-white text-gray-700 shadow-md block text-center"
//             >
//               Register
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
