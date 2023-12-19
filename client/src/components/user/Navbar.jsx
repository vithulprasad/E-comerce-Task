import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isLogIn } from "../../apis/connections/user";

function Navbar() {
  const [openSlide, setOpenSlide] = useState(false);
  const [user, setUser] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handleNavbar = () => {
    openSlide ? setOpenSlide(false) : setOpenSlide(true);
  };
  useEffect(() => {
    const data = async () => {
      await isLogIn().then((res) => {
        if (res.data.success == true) {
          setUser(true);
        } else {
          setUser(false);
        }
      });
    };
    data();
  }, [refresh]);
  return (
    <nav className="bg-white w-full max-w-screen-lg mx-auto border-gray-200 dark:bg-gray-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <button
          onClick={handleNavbar}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {openSlide ? (
          <>
            <div className="pt-14 flex justify-start">
              <div className="w-[300px] h-[300px] bg-gray-200 absolute">
                <ul className="font-medium  flex flex-col p-4 text-slate-500 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:dark:bg-gray-50 ">
                  <Link to={"/"}>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3 text-gray-500  rounded md:bg-transparent  md:p-0 dark:text-dark:bg-gray-500 md:dark:text-gray-500"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                  </Link>
                  <Link>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 text-gray-400 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Shoes
                      </a>
                    </li>
                  </Link>
                  <Link>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 text-gray-400 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Backpack
                      </a>
                    </li>
                  </Link>
                  {user ? (
                    <Link to={'/order'}>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 text-gray-400 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                          Orders
                        </a>
                      </li>
                    </Link>
                  ) : null}
                  {user ? (
                    <li
                      onClick={() => {
                        localStorage.removeItem("token");
                        refresh ? setRefresh(false) : setRefresh(true);
                      }}
                    >
                      <a
                        href="#"
                        className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 text-gray-400 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        logout
                      </a>
                    </li>
                  ) : (
                    <Link to={"/login"}>
                      <li>
                        <a className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 text-gray-400 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                          Login
                        </a>
                      </li>
                    </Link>
                  )}
                </ul>
              </div>
            </div>
          </>
        ) : null}

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium  flex flex-col p-4 text-slate-500 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:dark:bg-gray-50 ">
            <Link to={"/"}>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-500 bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-dark:bg-gray-500 md:dark:text-gray-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
            </Link>
            <Link>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 text-gray-400 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Shoes
                </a>
              </li>
            </Link>
            <Link>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 text-gray-400 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Backpack
                </a>
              </li>
            </Link>
            {user ? (
              <Link to={'/order'}>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 text-gray-400 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Orders
                  </a>
                </li>
              </Link>
            ) : null}

            {user ? (
              <li
                onClick={() => {
                  localStorage.removeItem("token");
                  refresh ? setRefresh(false) : setRefresh(true);
                }}
              >
                <a
                  href="#"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 text-gray-400 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  logout
                </a>
              </li>
            ) : (
              <Link to={"/login"}>
                <li>
                  <a className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 text-gray-400 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Login
                  </a>
                </li>
              </Link>
            )}
          </ul>
        </div>

        <Link to={"/cart"}>
          <div className="w-12 h-12 m-1 rounded-full bg-blue-300 mr-3 p-3 flex justify-center items-center shadow-sm">
            <img
              className="w-10 h-10"
              src="https://www.svgrepo.com/show/494438/shopping-cart.svg"
              alt=""
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
