import React from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { PlayArrow, Pause, Restore } from '@material-ui/icons';

const TimerControls = ({ handleReset, handlePlayPause }) => {
  return (
    <Paper>
      <Button id='start_stop' onClick={handlePlayPause}>
        <PlayArrow />
        <Pause />
      </Button>
      <Button id='reset' onClick={handleReset}>
        <Restore />
      </Button>
    </Paper>
  );
};

export default TimerControls;
