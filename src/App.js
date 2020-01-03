import React, { useState, useEffect } from 'react';

import TimerSettings from './components/timer-settings/timer-settings.component';
import TimerDisplay from './components/timer-display/timer-display.component';
import TimerControls from './components/timer-controls/timer-controls.component';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import './App.css';

const App = () => {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    let countdown;

    if (isRunning) {
      const timer = sessionLength => {
        const seconds = sessionLength * 60;
        const now = Date.now();
        const then = now + seconds * 1000;
        displayTimeLeft(seconds);

        countdown = setInterval(() => {
          const secondsLeft = Math.round((then - Date.now()) / 1000);
          if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
          }
          displayTimeLeft(secondsLeft);
        }, 1000);
      };

      function displayTimeLeft(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainderSeconds = seconds % 60;
        setTimeLeft(
          `${minutes < 10 ? '0' : ''}${minutes}:${
            remainderSeconds < 10 ? '0' : ''
          }${remainderSeconds}`
        );
      }

      timer(sessionLength);
    }

    return () => clearInterval(countdown);
  }, [isRunning, sessionLength]);

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
    setIsRunning(false);
    setTimeLeft('');
    setSessionLength(25);
    setBreakLength(5);
  };

  const handlePlayPause = () => {
    setIsRunning(!isRunning);
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

      <TimerDisplay sessionLength={sessionLength} timeLeft={timeLeft} />

      <TimerControls
        handleReset={handleReset}
        handlePlayPause={handlePlayPause}
      />
    </Container>
  );
};

export default App;
