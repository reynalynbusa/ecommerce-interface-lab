// Problem 2: Secure ID Generator
function generateIDs(count) {
  const ids = [];
  for (let i = 0; i < count; i++) {
    // Skip the number 5 as per constraints
    if (i === 5) {
      continue;
    }
    ids.push(ID-${i});
  }
  return ids;
}