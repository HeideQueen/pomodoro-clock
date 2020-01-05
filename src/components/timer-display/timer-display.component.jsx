import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const TimerDisplay = ({ sessionLength, timeLeft, onBreak }) => {
  return (
    <Paper>
      <Typography variant='h3' align='center' id='timer-label'>
        {onBreak ? 'Break' : 'Session'}
      </Typography>
      <Typography variant='h3' align='center' id='time-left'>
        {timeLeft
          ? timeLeft
          : `${sessionLength < 10 ? '0' : ''}${sessionLength}:00`}
      </Typography>
    </Paper>
  );
};

export default TimerDisplay;
