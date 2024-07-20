import { useSelector } from "react-redux";
import Post from "components/Post";
import { Typography as MuiTypography, useTheme } from "@mui/material";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";
import { useEffect } from "react";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import BallotIcon from "@mui/icons-material/Ballot";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import { AspectRatio } from "@mui/joy";
import InstagramPost from "components/InstagramPost";

const Timeline = () => {
  // const mainTheme = useTheme();
  const defaultMode = 'dark';
  const timeline = useSelector((state) => state.timeline);

  if (!(timeline && timeline.length > 0)) {
    return (
      <>
        <MuiTypography
          variant="h2"
          sx={{ textAlign: "center", padding: "0", margin: "20px" }}
        >
          No Post Found
        </MuiTypography>
      </>
    );
  }
  return (
    <>
      {/* <CssVarsProvider defaultMode="dark"> */}
        {timeline.map((post, index) => (
          // <Post key={index} {...post} />
          <InstagramPost key={index} {...post} />
        ))}
      {/* </CssVarsProvider> */}
    </>
  );
};
export default Timeline;
