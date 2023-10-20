import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
  } from "@material-tailwind/react";
  import avatar from "../assets/images/avatar.jpg"
  const UserProfile = () => {
    return (
      <Menu>
        <MenuHandler>
          <img className="h-10 w-10 rounded-full" src={avatar} alt={"profile"} />
        </MenuHandler>
        <MenuList>
          <MenuItem
          className="font-Cairo text-xs hover:text-orange-500"
          > 
          Profile
          </MenuItem>
          <MenuItem
          className="font-Cairo text-xs hover:text-orange-500"
          >
            Favorites
          </MenuItem>
          <MenuItem
          className="font-Cairo text-xs hover:text-orange-500"
          >
            Buy Premium
          </MenuItem>
          <MenuItem
          className="font-Cairo text-xs hover:text-orange-500"
          >
            Settings
          </MenuItem>
          <MenuItem
          className="font-Cairo text-xs hover:text-orange-500"
          >
            Help
          </MenuItem>
          <MenuItem
          className="font-Cairo text-xs hover:text-red-500"
          >
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    );
  };
  
  export default UserProfile;
  