import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Card } from '@mui/material';

const Loader = () => {
  return (
    <Card sx={{ display: 'flex', justifyContent:'center', padding:'1rem', marginTop:'1rem' }}>
      <CircularProgress />
    </Card>
  );
}

export default Loader;