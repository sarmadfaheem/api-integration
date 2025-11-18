import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="font-bold">
        <NavigationMenu>
          <NavigationMenuList className="flex justify-around mt-20">
            <NavigationMenuItem>
              <Link to="/">Home</Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/pc">Post</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}

export default Navbar;
