import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import SummarizeIcon from "@mui/icons-material/Summarize";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import Person2Icon from "@mui/icons-material/Person2";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import TIcon from "../../public/TIcon.png";

export default function Dock() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className="w-full -space-x-6 shadow-xl"
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Nearby" icon={<SummarizeIcon />} />
        <BottomNavigationAction label="Nearby" icon={<AddCircleSharpIcon />} />

        <BottomNavigationAction
          label="Nearby"
          icon={<BarChartOutlinedIcon />}
        />
        <BottomNavigationAction label="Favorites" icon={<Person2Icon />} />
      </BottomNavigation>
    </Box>
  );
}

//   );
// };

// export default Dock;
