export const grantStatusColors = {
  open: 'bg-green-300',
  funded: 'bg-blue-300',
  closed: 'bg-gray-200',
  upcoming: 'bg-orange-200'
}

export function getGrantBgColorByStatus(status) {
  return grantStatusColors[status] || '';
}