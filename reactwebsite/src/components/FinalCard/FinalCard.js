import React from "react";
import { Grid, grid2Classes } from "@mui/material";
import image1 from "../../Assets/Images/image123.JPG";
import "./FinalCard.css";

const containerData = [
  {
    text: "Amplify your blockchain team",
    imageUrl: <img src={image1} alt="Image" width="400" height="600" />,
    content: "JUNE 01, 2020 ADMIN",
    content1:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    text: "Amplify your blockchain team",
    imageUrl: <img src={image1} alt="Image" width="400" height="600" />,
    content: "JUNE 01, 2020 ADMIN",
    content1:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    text: "Amplify your blockchain team",
    imageUrl: <img src={image1} alt="Image" width="400" height="600" />,
    content: "JUNE 01, 2020 ADMIN",
    content1:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    text: "Amplify your blockchain team",
    imageUrl: <img src={image1} alt="Image" width="400" height="600" />,
    content: "JUNE 01, 2020 ADMIN ",
    content1:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
];

const FinalCard = () => {
  return (
    <div>
      <div className="final-body">
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "900",
            marginTop: "10%",
            marginBottom: "2%",
            padding: "5%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Recent Blogs{" "}
        </h1>
        <Grid container>
          {containerData.map((data, index) => (
            <Grid item xs={12} md={5} lg={3}>
              <div className="finalcard-container">
                <div className="finalcard-line">
                  <div className="finalcard-content2">{data.text}</div>
                </div>
                <div className="finalcard-line">
                  <img src={image1} alt="Image" width="400" height="600" />
                </div>
                <div className="finalcard-line">
                  <div className="finalcard-content">{data.content}</div>
                </div>
                <div className="finalcard-line">
                  <div className="finalcard-content1">{data.content1}</div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default FinalCard;
