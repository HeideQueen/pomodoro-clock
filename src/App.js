import React, { useState } from 'react';

import TimerSettings from './components/timer-settings/timer-settings.component';
import TimerDisplay from './components/timer-display/timer-display.component';
import TimerControls from './components/timer-controls/timer-controls.component';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import './App.css';

const App = () => {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

  const handleSettingsClick = type => {
    switch (type) {
      case 'break-decrement':
        if (breakLength > 1) setBreakLength(breakLength - 1);
        break;

      case 'break-increment':
        if (breakLength < 60) setBreakLength(breakLength + 1);
        break;

      case 'session-decrement':
        if (sessionLength > 1) setSessionLength(sessionLength - 1);
        break;

      case 'session-increment':
        if (sessionLength < 60) setSessionLength(sessionLength + 1);
        break;

      default:
        return 'error';
    }
  };

  const handleReset = () => {
    setSessionLength(25);
    setBreakLength(5);
  };

  return (
    <Container>
      <Typography variant='h2' align='center'>
        Queen's Pomodoro Clock
      </Typography>

      <TimerSettings
        type='break'
        breakLength={breakLength}
        handleSettingsClick={handleSettingsClick}
      />

      <TimerSettings
        type='session'
        sessionLength={sessionLength}
        handleSettingsClick={handleSettingsClick}
      />

      <TimerDisplay sessionLength={sessionLength} />

      <TimerControls handleReset={handleReset} />
    </Container>
  );
};

export default App;
