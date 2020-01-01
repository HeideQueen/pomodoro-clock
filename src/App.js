import React, { useState } from 'react';

import TimerSettings from './components/timer-settings/timer-settings.component';
import TimerDisplay from './components/timer-display/timer-display.component';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import './App.css';

const App = () => {
  const [timeLeft, setTimeLeft] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

  const handleSettingsClick = type => {
    switch (type) {
      case 'break-decrement':
        return setBreakLength(breakLength - 1);

      case 'break-increment':
        return setBreakLength(breakLength + 1);

      case 'session-decrement':
        return setTimeLeft(timeLeft - 1);

      case 'session-increment':
        return setTimeLeft(timeLeft + 1);

      default:
        return 'error';
    }
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
        timeLeft={timeLeft}
        handleSettingsClick={handleSettingsClick}
      />

      <TimerDisplay timeLeft={timeLeft} />
    </Container>
  );
};

export default App;
