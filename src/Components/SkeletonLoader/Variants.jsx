import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { red } from '@mui/material/colors';

export default function Variants() {
  return (
    <Stack spacing={1} sx={{ color: "black", background:'green'}} bgcolor={'white'}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton sx={{color:'red'}} variant="circular" width={40} height={40} />
      <Skeleton sx={{color:'red', background:'white', backdropFilter:'red'}} variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
  );
}
