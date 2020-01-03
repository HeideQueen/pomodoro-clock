import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const TimerDisplay = ({ sessionLength }) => {
  return (
    <Paper>
      <Typography id='timer-label'>Session</Typography>
      <Typography id='time-left'>{sessionLength}:00</Typography>
    </Paper>
  );
};

export default TimerDisplay;
