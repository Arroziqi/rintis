export function getEstimatedPaybackMonth(roi: string): string {
  const match = roi.match(/(\d+)\s*%/);
  if (!match) return '';

  const percent = Number(match[1]);
  if (percent <= 0) return '';

  const months = (100 / percent).toFixed(1);
  return `Modal balik dalam sekitar ${months} bulan`;
}
