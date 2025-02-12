import { CgProfile } from "react-icons/cg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import Swal from "sweetalert2";
import ButtonSm from "../common/ButtonSm";

const ProfileDropdown = () => {
  const user = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/login");
    Swal.fire({
      title: "Success!",
      text: "You are logged out successfully!",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <p>
          <CgProfile className="text-4xl" />
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-xl p-2 text-center">
          {user?.email}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <ButtonSm size="lg" variant="outline" text={"My Profile"} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ButtonSm size="lg" variant="outline" text={"Dashboard"} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button onClick={handleLogout} className="w-full">
              <ButtonSm size="lg" variant="outline" text={"Logout"} />
            </button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
