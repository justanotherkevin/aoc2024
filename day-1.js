const { list1, list2 } = require("./day-1/data");

function run() {
  const part2Ans = getSimilarityScore();
  console.log(`part2: ${part2Ans}`);
  return "yeet";
}
run();

const oneSorted = list1.sort();
const twoSorted = list2.sort();

const sumDiff = oneSorted.reduce((sum, curr, idx) => {
  const listTwoCurr = twoSorted[idx];
  const diff = Math.abs(curr - listTwoCurr);
  return sum + diff;
}, 0);

function getSimilarityScore() {
  // create frequency map with list2
  const rightFreq = list2.reduce((freq, num) => {
    freq[num] = (freq[num] || 0) + 1;
    return freq;
  }, {});

  const score = list1.reduce((sum, num) => {
    const freq = rightFreq[num] || 0;
    const numSimScore = num * freq;
    return (sum += numSimScore);
  }, 0);

  return score;
}
