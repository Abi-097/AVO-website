import React from "react";
import {
  Paper,
  Card,
  CardContent,
  Typography,
  Icon,
  Box,
  Grid,
  Container,
  makeStyles,
} from "@mui/material";
import "./Client.css";
import { Image } from "react-bootstrap";
import image2 from "../../Assets/Images/man-icon.png";
const cardData = [
  {
    content:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    icon: <Image src={image2} roundedCircle width="60px" height="60px" />,
    name: "Roger Scott",
    position: "Marketing Manager",
  },
  {
    content:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    icon: <Image src={image2} roundedCircle width="60px" height="60px" />,
    name: "Roger Scott",
    position: "Marketing Manager",
  },
  {
    content:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    icon: <Image src={image2} roundedCircle width="60px" height="60px" />,
    name: "Roger Scott",
    position: "Marketing Manager",
  },
  {
    content:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    icon: <Image src={image2} roundedCircle width="60px" height="60px" />,
    name: "Roger Scott",
    position: "Marketing Manager",
  },
  {
    content:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    icon: <Image src={image2} roundedCircle width="60px" height="60px" />,
    name: "Roger Scott",
    position: "Marketing Manager",
  },
  {
    content:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    icon: <Image src={image2} roundedCircle width="60px" height="60px" />,
    name: "Roger Scott",
    position: "Marketing Manager",
  },
];

const Client = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "3%",
          fontSize: "28px",
          fontWeight: "900",
        }}
      >
        CLIENTS SAYS ABOUT US?
      </h1>
      <Container maxWidth="md">
        <Paper style={{ padding: "20px" }}>
          <div className="scroll-container">
            {cardData.map((card, index) => (
              <Card key={index} className="custom-card">
                <CardContent>
                  <Typography sx={{ color: "#a0a0b4" }}>
                    {card.content}
                  </Typography>

                  <div className="search-engine d-flex client-card">
                    {card.icon}
                    <div class="text">
                      <h6 className="client-h6">{card.name}</h6>
                      <p className="client-p">{card.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default Client;
