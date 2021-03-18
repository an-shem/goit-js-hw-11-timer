import './styls.css';
import updateClockface from './update-clock';
import CountdownTimer from './countdown-timer';

const reverseTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 2, 2021'),
  onTick: updateClockface,
});

reverseTimer.start();
