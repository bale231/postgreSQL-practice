import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useProfile from "../customHooks/useProfile";

export function StickyNavbar() {
  const { profile, userLocal, userSession } = useProfile();
  const [openNav, setOpenNav] = useState(false);
  const [clicked, setClicked] = useState(-1); // Set initial state to -1
  const navigate = useNavigate();
  const location = useLocation();

  // Update state based on the current path
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setClicked(5);
        break;
      case "/login":
        setClicked(0);
        break;
      case "/register":
        setClicked(1);
        break;
      default:
        setClicked(-1);
        break;
    }
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/">
          <Button
            variant={clicked === 5 ? "gradient" : "text"}
            size="sm"
            onClick={() => setClicked(5)}
            className={`flex items-center ${
              clicked === 5
                ? "text-white bg-[#232323] lg:inline-block"
                : "lg:inline-block"
            }`}
          >
            Pages
          </Button>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Button
          variant={clicked === 4 ? "gradient" : "text"}
          size="sm"
          onClick={() => setClicked(4)}
          className={
            clicked === 4
              ? "text-white bg-[#232323] lg:inline-block"
              : "lg:inline-block"
          }
        >
          Account
        </Button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Button
          variant={clicked === 3 ? "gradient" : "text"}
          size="sm"
          onClick={() => setClicked(3)}
          className={
            clicked === 3
              ? "text-white bg-[#232323] lg:inline-block"
              : "lg:inline-block"
          }
        >
          Blocks
        </Button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Button
          variant={clicked === 2 ? "gradient" : "text"}
          size="sm"
          onClick={() => setClicked(2)}
          className={
            clicked === 2
              ? "text-white bg-[#232323] lg:inline-block"
              : "lg:inline-block"
          }
        >
          Docs
        </Button>
      </Typography>
    </ul>
  );

  function handleLogout() {
    if (userLocal) {
      localStorage.clear();
    } else if (userSession) {
      sessionStorage.clear();
    }
    navigate("/login");
    window.location.reload();
  }

  return (
    <div className="max-h-[768px] w-full fixed top-0">
      <Navbar className="sticky top-0 z-10 max-w-full rounded-none p-4 backdrop-blur-[10px]">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Material Tailwind
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {!userLocal && !userSession ? (
              <div className="flex items-center gap-x-1">
                <Link to="/login">
                  <Button
                    variant={clicked === 0 ? "gradient" : "text"}
                    size="sm"
                    onClick={() => setClicked(0)}
                    className={
                      clicked === 0
                        ? "text-white bg-[#232323] hidden lg:inline-block"
                        : "hidden lg:inline-block"
                    }
                  >
                    <span>Log In</span>
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    variant={clicked === 1 ? "gradient" : "text"}
                    size="sm"
                    onClick={() => setClicked(1)}
                    className={
                      clicked === 1
                        ? "text-white bg-[#232323] hidden lg:inline-block"
                        : "hidden lg:inline-block"
                    }
                  >
                    <span>Sign in</span>
                  </Button>
                </Link>
              </div>
            ) : (
              <Button
                variant="text"
                size="sm"
                onClick={handleLogout}
                className="hidden lg:inline-block"
              >
                <span>Log Out</span>
              </Button>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          {!userLocal && !userSession ? (
            <div className="flex justify-center gap-x-1">
              <Link to="/login">
                <Button
                  fullWidth
                  variant={clicked === 0 ? "gradient" : "text"}
                  onClick={() => setClicked(0)}
                  className={
                    clicked === 0
                      ? "text-white bg-[#232323]"
                      : " lg:inline-block"
                  }
                >
                  <span>Log In</span>
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  fullWidth
                  variant={clicked === 1 ? "gradient" : "text"}
                  onClick={() => setClicked(1)}
                  className={
                    clicked === 1
                      ? "text-white bg-[#232323]"
                      : " lg:inline-block"
                  }
                >
                  <span>Sign in</span>
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-x-1">
              <Button
                fullWidth
                variant="text"
                onClick={handleLogout}
                className={
                  clicked === 0 ? "text-white bg-[#232323]" : " lg:inline-block"
                }
              >
                <span>Log Out</span>
              </Button>
            </div>
          )}
        </MobileNav>
      </Navbar>
    </div>
  );
}
