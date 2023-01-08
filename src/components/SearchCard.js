import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import { Stack } from '@mui/system';
import ImageNotFound from './ImageNotFound.jpg'
import { Link } from 'react-router-dom';

const SearchCard = (data) => {
  return (
    <Card sx={{ display: 'flex' }}>
      <Link to={`/details/${data.data.imdbID}`}>
        <CardMedia
        component="img"
        sx={{ width: 130 }}
        image={data.data.Poster!=='N/A'?(data.data.Poster):(ImageNotFound)}
        alt="Live from space album cover"
      />
      </Link>
    <CardContent sx={{ flex: '1 0 auto' }}>
        <Stack alignItems="flex-start" spacing={1}>
        <Link to={`/details/${data.data.imdbID}`}>
          <Typography component="div" variant="h5">
            {data.data.Title}
          </Typography>
          </Link>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Released {data.data.Year}
          </Typography>
          <Chip label={data.data.Type} sx={{textTransform:'capitalize'}}/>
          </Stack>
    </CardContent>
    </Card>
  );
}
export default SearchCard;