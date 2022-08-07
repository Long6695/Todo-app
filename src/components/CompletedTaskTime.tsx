import {Typography} from '@mui/material';
import React from 'react';
import { durationAsString } from '../services/function';

const CompletedTaskTime = ({createdTime, finishedTime}: {createdTime?: string; finishedTime?: string}) => {
  const timeDurationFormat = durationAsString(createdTime, finishedTime);
  return (
    <Typography variant="caption">
      Your task completed in {timeDurationFormat}
    </Typography>
  );
};

export default CompletedTaskTime;
