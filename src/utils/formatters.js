/**
 * Format a date to a readable string
 * @param {Date|string|number} date - The date to format
 * @returns {string} The formatted date string
 */
export function formatDate(date) {
  const d = new Date(date)
  return d.toLocaleDateString()
}
