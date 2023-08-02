// countFormatter.js
export function convertCountsToIndianFormat(count) {
  count = parseInt(count);

  if (count >= 10000000) {
    // Convert to crores
    return (count / 10000000).toFixed(1) + " crore";
  } else if (count >= 100000) {
    // Convert to lakhs
    return (count / 100000).toFixed(1) + " lakh";
  } else if (count >= 1000) {
    // Convert to thousands
    return (count / 1000).toFixed(1) + "k";
  } else {
    return count.toString();
  }
}
