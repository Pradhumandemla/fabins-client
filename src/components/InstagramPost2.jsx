import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import InputBase from '@mui/material/InputBase';
import Link from '@mui/material/Link';

const imageStyles = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
};

export default function InstagramPost() {
  return (
    <Card variant="outlined" sx={{ minWidth: 300 }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box
          sx={{
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              m: '-2px',
              borderRadius: '50%',
              background:
                'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
            },
          }}
        >
          <Avatar
            variant="rounded"
            src="/static/logo.png"
            sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }}
          />
        </Box>
        <Typography fontWeight="bold">MUI</Typography>
        <IconButton variant="plain" size="small" sx={{ ml: 'auto' }}>
          <MoreHorizIcon />
        </IconButton>
      </CardContent>
      <Box sx={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
        <img src="/static/images/cards/yosemite.jpeg" alt="" style={imageStyles} loading="lazy" />
      </Box>
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1, mx: -1 }}>
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <IconButton variant="plain" size="small">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton variant="plain" size="small">
            <ModeCommentOutlinedIcon />
          </IconButton>
          <IconButton variant="plain" size="small">
            <SendOutlinedIcon />
          </IconButton>
        </Box>
        {/* Remaining code for like count */}
      </CardContent>
      {/* Remaining code for caption, metadata, and comment section */}
    </Card>
  );
}
