const getSleepHours = day => {
    if(day === 'monday') {
      return 8; 
    } else if (day === 'tuesday') {
      return 7;
    } else if (day === 'wednesday') {
      return 6;
    } else if (day === 'thursday') {
      return 5;
    } else if (day === 'friday') {
      return 4;
    } else if (day === 'saturday') {
      return 10;
    } else if (day === 'sunday') {
      return 9;
    } else {
      return 'Please enter a valid day'
    }
  };
  
const getActualSleepHours = () => {
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};

const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
};
const calculateDebtSleep = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.')
  } else if(actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than you needed.')
  } else {
    console.log('Go get some rest!')
  }
}