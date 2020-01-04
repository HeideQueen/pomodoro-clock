import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const TimerDisplay = ({ sessionLength, timeLeft, onBreak }) => {
  return (
    <Paper>
      <Typography id='timer-label'>{onBreak ? 'Break' : 'Session'}</Typography>
      <Typography id='time-left'>
        {timeLeft
          ? timeLeft
          : `${sessionLength < 10 ? '0' : ''}${sessionLength}:00`}
      </Typography>
    </Paper>
  );
};

export default TimerDisplay;
