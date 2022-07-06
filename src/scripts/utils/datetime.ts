export function formatDuration(time: number): string {
  const [seconds, millis] = time.toString().split('.');
  let min = 0;
  const sec = +seconds;
  let ms = millis ? +millis.slice(0, 1) : 0;
  const checkZero = (n: number): string => {
    const _n = n.toString();
    return _n.length === 1 ? `0${n}` : _n;
  };

  if (sec >= 60) {
    min = Math.trunc(sec / 60);
    ms += sec % 60;
  }

  return `${checkZero(min)}:${checkZero(sec)}:${checkZero(ms)}`;
}
