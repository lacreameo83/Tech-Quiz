import { Button } from '@mui/material';
// import React from 'react'
import image from "../../assets/new project logo.png";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

function NavBar() {
  const {setLoginModel,setResitertModel,RegisterModel,loginModel}=React.useContext(GlobalContext)
  

  

      const [value, setValue] = React.useState("one");

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };

  return (
    <div className="py-[31px] px-3 xl:px-[100px]">
      <div className="flex items-center justify-between ">
        <div className="flex items-center ">
          <img className="w-[41.38px] h-[18px]" src={image} />
          <p className="font-[Montserrat] font-[700] text-[18px] text-[#515151]">
            TechyQuiz
          </p>
        </div>
        <div className="hidden sm:block">
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="#FF9437"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#FF9437",
                  border: "1px",
                },
              }}
              aria-label="navigation tabs"
            >
              <Tab
                value="one"
                label="Home"
                sx={{
                  color: value === "one" ? "#FF9437" : "#515151",
                  fontSize: "15px",
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                }}
              />
              <Tab
                value="two"
                label="Categories"
                sx={{
                  color: value === "two" ? "#FF9437" : "#515151",
                  fontSize: "15px",
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                }}
              />
              <Tab
                value="three"
                label="Learn"
                sx={{
                  color: value === "three" ? "#FF9437" : "#515151",
                  fontSize: "15px",
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                }}
              />
              <Tab
                value="four"
                label="Profile"
                sx={{
                  color: value === "four" ? "#FF9437" : "#515151",
                  fontSize: "15px",
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                }}
              />
            </Tabs>
          </Box>
        </div>
        <div className="flex items-center gap-[12px]">
          <p
            onClick={() => setLoginModel(!loginModel)}
            className="text-[#515151] font-[Montserrat] font-[600] text-[18px] "
          >
            Login
          </p>

          <button
            onClick={() => setResitertModel(!RegisterModel)}
            style={{
              background: "rgba(24, 160, 154, 1)",
              padding: "20px",
              width: "118px",
              height: "48px",
              borderRadius: "12px",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "21.98px",
              color: "#ffffff",
              fontFamily: "Montserrat",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar
