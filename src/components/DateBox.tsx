import {Typography} from '@mui/material';
import {Box} from '@mui/system';
import moment from 'moment';
import React, {memo} from 'react';

const DateBox = ({date}: {date?: string}) => {
  const day = moment(date).format('DD');
  const month = moment(date).format('MMM');
  const year = moment(date).year();
  return (
    <Box
      sx={{display: 'flex', alignItems: 'center', borderRadius: 1}}
      color="color.main"
      bgcolor="background.default"
      px={1}
    >
      <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography variant="caption">{day}/</Typography>
          <Typography variant="caption">{month}</Typography>
        </Box>
        <Typography variant="caption">{year}</Typography>
      </Box>
    </Box>
  );
};

export default memo(DateBox);
