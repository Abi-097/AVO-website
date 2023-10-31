import { Paper } from "@mui/material";
import React from "react";
import image1 from "../../Assets/Images/sheet.JPG";
const Sheet = () => {
  return (
    <div>
      <Paper>
        <div className="d-flex align-items-center justify-content-center">
          <img src={image1} alt="image1" />
        </div>
      </Paper>
    </div>
  );
};

export default Sheet;
