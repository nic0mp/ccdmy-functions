const getSleepHours = day => {
  if(day === 'monday') {
    return 8; 
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 7;
  } else if (day === 'thursday') {
    return 8;
  } else if (day === 'friday') {
    return 7;
  } else if (day === 'saturday') {
    return 10;
  } else if (day === 'sunday') {
    return 9;
  } else {
    return 'Please enter a valid day'
  }
};
// console.log(getSleepHours('tuesday')); 
const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
;
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};
console.log('Your actual sleep hours for the week:' + ' ' + getActualSleepHours());
console.log('Your ideal sleep hours for the week:' + ' ' + getIdealSleepHours());
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.')
  } else if(actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than you needed.')
  } else {
    console.log(`You got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you needed this week. Get some rest.`)
  }
};
calculateSleepDebt();


