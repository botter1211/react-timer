export const formatTime = (time) => {
  let x = time % 360;
  let y = x % 60;
  const getSeconds = y < 10 ? `0${y}` : y;
  const minutes = (x - y) / 60;
  const getMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const hours = (time - x) / 360;
  const getHours = hours < 10 ? `0${hours}` : hours;

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
