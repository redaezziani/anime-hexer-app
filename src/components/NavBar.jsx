import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import UserProfile from "./UserProfile";
import NotificationsMenu from "./Notification";
import logo from "../assets/images/Hexer.png";

const navListMenuItems = [
  {
    title: "Action",
    description: "Action anime ",
  }
  ,
  {
    title: "Adventure",
    description: "Adventure anime ",
  }
  ,
  {
    title: "Cars",
    description: "Cars anime ",
  }
  ,
  {
    title: "Comedy",
    description: "Comedy anime ",
  }
  ,
  {
    title: "Dementia",
    description: "Dementia anime ",
  }
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({  title, description }, key) => (
    <a href="#" key={key}>
      <MenuItem className="flex font-Cairo items-center gap-3 rounded-lg">
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex font-Cairo items-center text-sm font-bold"
          >
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs font-Cairo !font-medium text-blue-gray-500"
          >
            {description}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex font-Cairo items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              List
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <ListItem className="flex font-Cairo items-center gap-2 py-2 pr-4">
        <a href="#">Home</a>
      </ListItem>
      <ListItem className="flex font-Cairo items-center gap-2 py-2 pr-4">
        <a href="#">List</a>
      </ListItem>
      <NavListMenu />
      <ListItem className="flex font-Cairo items-center gap-2 py-2 pr-4">
        <a href="#">Categories</a>
      </ListItem>
    </List>
  );
}

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto top-2 fixed z-50 rounded-md  max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 flex  font-Cairo text-orange-500 cursor-pointer py-1.5 lg:ml-2"
        >
          <img className="w-10 h-10 object-cover" src={logo} alt="" />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden justify-center items-end gap-5 lg:flex">
          <NotificationsMenu />
          <UserProfile />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <NotificationsMenu />
          <UserProfile />
        </div>
      </Collapse>
    </Navbar>
  );
}
