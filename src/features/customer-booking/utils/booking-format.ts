export function formatCurrency(value: number) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDuration(minutes: number) {
  if (minutes < 60) {
    return `${minutes} phut`;
  }

  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;

  return rest > 0 ? `${hours} gio ${rest} phut` : `${hours} gio`;
}

export function clampRedeemPoints(points: number) {
  return Math.max(0, Math.min(350, Math.floor(points / 10) * 10));
}
