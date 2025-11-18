import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="text-white font-bold">
        <NavigationMenu>
          <NavigationMenuList className="flex justify-around mt-20">
            {/* Home Link */}
            <NavigationMenuItem>
              {/* You can use NavigationMenuLink for the active styling */}
              <Link to="/">Home</Link>
            </NavigationMenuItem>

            {/* Post Link */}
            <NavigationMenuItem>
              {/* Use Link from react-router-dom and apply the shadcn styles via className */}
              <Link to="/pc">Post</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}

export default Navbar;
