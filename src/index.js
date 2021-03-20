import './styls.css';
import CountdownTimer from './countdown-timer';

const reverseTimer_1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 2, 2021'),
});
