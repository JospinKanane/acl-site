import React, { useState, useEffect } from "react";
import logo from "../../logo-b.png"
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

const Menu = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:underline"
      >
        <a href="#" className="flex items-center">
          Accueil
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:underline"
      >
        <a href="#" className="flex items-center">
          Programmes
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:underline"
      >
        <a href="#" className="flex items-center">
          Galerie
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:underline"
      >
        <a href="#" className="flex items-center">
          Artistes
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:underline"
      >
        <a href="#" className="flex items-center">
          À propos de nous
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:underline"
      >
        <a href="https://dev-acl-news.pantheonsite.io/" className="flex items-center">
          Blog
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:underline"
      >
        <a href="#" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4s">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img src={logo} alt="logo acl" className=" h-[50px] w-[100px]" />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex gap-5">
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block hover:bg-black hover:bottom-1 hover:text-[#2DE1C2]"
              >
                <span>Connexion</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block bg-[#2DE1C2] rounded-lg hover:bg-black hover:text-[#2DE1C2]"
              >
                <span className="">Inscription</span>
              </Button>
            </div>
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
          <div className="flex flex-col gap-5 w-full h-auto pb-2">
              <Button
                variant="gradient"
                size="sm"
                className=" lg:inline-block border border-black hover:bg-black hover:bottom-1 hover:text-[#2DE1C2]"
              >
                <span>Connexion</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className=" lg:inline-block bg-[#2DE1C2] rounded-lg hover:bg-black hover:text-[#2DE1C2]"
              >
                <span className="">Inscription</span>
              </Button>
            </div>
        </MobileNav>
      </Navbar>
    </>
  );
};

export default Menu;
