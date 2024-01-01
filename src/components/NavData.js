import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AddTaskIcon from "@mui/icons-material/AddTask";

const NavData = () => {
  const ListData = [
    {
      admin: [
        { icon: <People />, label: "Users", Path: "users" },
        {
          icon: <AlignHorizontalLeftIcon />,
          label: "Services",
          Path: "services",
        },
        { icon: <AddTaskIcon />, label: "Approval", Path: "" },
        { icon: <AttachMoneyIcon />, label: "Payments", Path: "" },
        { icon: <EngineeringIcon />, label: "Workers", Path: "" },
      ],
      user: [{},{}],
    },
  ];

  return ListData;
};
export default NavData;
