export function formatDuration(duration: number): string {
  const mins = Math.floor(duration / 60);
  const secds = Math.floor(duration - mins * 60);

  const formatCell = (val: number): string => {
    const _val = val.toString();
    return _val.length === 1 ? `0${_val}` : _val;
  };

  return `${formatCell(mins)}:${formatCell(secds)}`;
}
