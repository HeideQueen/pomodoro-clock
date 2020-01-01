import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

const TimerSettings = ({
  type,
  timeLeft,
  breakLength,
  handleSettingsClick
}) => {
  return (
    <Paper>
      <Typography id={`${type}-label`}>{type} length</Typography>

      <IconButton
        id={`${type}-decrement`}
        onClick={() => handleSettingsClick(`${type}-decrement`)}
      >
        <ArrowDownward />
      </IconButton>

      <Typography id={`${type}-length`} display='inline'>
        {type === 'break' ? breakLength : timeLeft}
      </Typography>

      <IconButton
        id={`${type}-increment`}
        onClick={() => handleSettingsClick(`${type}-increment`)}
      >
        <ArrowUpward />
      </IconButton>
    </Paper>
  );
};

export default TimerSettings;
