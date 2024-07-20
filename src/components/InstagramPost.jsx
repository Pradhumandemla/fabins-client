/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import {
  Avatar,
  Box,
  Link,
  Input,
  Typography,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import FaceIcon from "@mui/icons-material/Face";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { useTheme } from "@mui/material/styles";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        opacity: 0.3,
        width: "20px",
        height: "100%",
      }}
      onClick={onClick}
    />
  );
}

export default function Post({ userId, description, images, likes, comments }) {
  const navigate = useNavigate();
  const theme = useTheme();
  
  console.log(theme.palette);

  var settings = {
    dots: false,
    // arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // appendDots: (dots) => (
    //   <div style={{ overflow: "hidden", bottom: "-45px" }}>
    //     <ul style={{ paddingInlineStart: "0px" }}> {dots} </ul>
    //   </div>
    // ),
  };

  return (
    <Card
      variant="outlined"
      color="primary"
      sx={{
        minWidth: 300,
        borderRadius: "0.75rem",
        border: "0px",
        marginY: "2rem",
      }}
    >
      <CardContent
        orientation="horizontal"
        sx={{ alignItems: "center", gap: 1, display: "flex", }}
      >
        <Box
          sx={{
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              m: "-2px",
              borderRadius: "50%",
              background:
                "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
              
            },
          }}
        >
          <Avatar
            size="lg"
            src={process.env.REACT_APP_BACKEND+"/public/assets/"+(userId.profilePicture)?userId.profilePicture:"placeholder.jpg"}
            sx={{ p: 0, border: "2px solid", borderColor: "background.body" }}
          />
        </Box>
        <Typography
          fontWeight="bold"
          sx={{ cursor: "pointer" }}
          onClick={() => {
            navigate(`/profile/${userId._id}`);
          }}
        >
          {userId.firstName + " " + userId.lastName}
        </Typography>
        <IconButton
          variant="plain"
          color="inherit"
          size="small"
          sx={{ ml: "auto" }}
        >
          <MoreHorizIcon />
        </IconButton>
      </CardContent>
      <CardContent>
        {/* <AspectRatio> */}
        {images && images.length > 1 ? (
          <Box
            className="slider-container"
            style={{
              maxWidth: "600px",
              lineHeight: "0px",
              // marginRight: "0px",
              // marginLeft: "-24px",
            }}
          >
            <Slider {...settings}>
              {images.map((img, index) => (
                <img
                  key={index}
                  height="auto"
                  alt="post"
                  // src={`${process.env.REACT_APP_BACKEND}/${img.path}`}
                  src="https://mui.com/static/images/cards/yosemite.jpeg"
                />
              ))}
            </Slider>
          </Box>
        ) : (
          <Box
            className="slider-container"
            style={{
              maxWidth: "600px",
              lineHeight: "0px",
              // marginRight: "0px",
              // marginLeft: "-24px",
            }}
            >
            <img
              height="auto"
              width='100%'
              alt="post"
              style={{borderRadius:'.75rem'}}
              // src={`${process.env.REACT_APP_BACKEND}/${images[0].path}`}
              src="https://mui.com/static/images/cards/yosemite.jpeg"
            />
          </Box>
        )}
        {/* </AspectRatio> */}
      </CardContent>
      <CardContent orientation="horizontal" sx={{ gap: 1, display: "flex" }}>
        <IconButton variant="plain" color="inherit" size="small">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton variant="plain" color="inherit" size="small">
          <ModeCommentOutlinedIcon />
        </IconButton>
        <IconButton variant="plain" color="inherit" size="small">
          <SendOutlinedIcon />
        </IconButton>
      </CardContent>
      <CardContent >
        <Link
          component="button"
          underline="none"
          variant="body2"
          fontWeight="bold"
          sx={{ color: "text.primary" }}
        >
          8.1M Likes
        </Link>
        <Typography variant="body2">
          <Link
            component="button"
            color="inherit"
            fontWeight="bold"
            sx={{ color: "text.primary" }}
          >
            MUI
          </Link>{" "}
          The React component library you always wanted
        </Typography>
        <Link
          component="button"
          underline="none"
          variant="body2"
          startIcon="…"
          sx={{ color: "text.secondary" }}
        >
          more
        </Link>
        <Typography variant="caption" sx={{ mt: 0.5 }}>
          2 DAYS AGO
        </Typography>
      </CardContent>
      <CardContent orientation="horizontal" sx={{ gap: 1, display: "flex",}}>
        <IconButton size="small" variant="plain" color="inherit">
          <FaceIcon />
        </IconButton>
        <Input
          variant="standard"
          size="small"
          placeholder="Add a comment…"
          sx={{ flex: 1, px: 0 }}
        />
        <Link disabled underline="none" variant="body2" role="button">
          Post
        </Link>
      </CardContent>
    </Card>
  );
}
