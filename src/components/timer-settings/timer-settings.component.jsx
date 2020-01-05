import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

import './timer-settings.styles.scss';

const TimerSettings = ({
  type,
  sessionLength,
  breakLength,
  handleSettingsClick
}) => {
  return (
    <Paper elevation={0} className='settings'>
      <Typography variant='h4' id={`${type}-label`}>
        {type} length
      </Typography>

      <IconButton
        id={`${type}-decrement`}
        onClick={() => handleSettingsClick(`${type}-decrement`)}
      >
        <ArrowDownward />
      </IconButton>

      <Typography id={`${type}-length`} display='inline'>
        {type === 'break' ? breakLength : sessionLength}
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
