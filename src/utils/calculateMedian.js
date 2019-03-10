export default function (nums) {
  const length = nums.length;
  console.log('nums: ', nums);
  nums.sort((a, b) => {
    return parseFloat(a) - parseFloat(b);
  });
  console.log('nums sorted: ', nums);
  if (length % 2 === 0) {
    return (parseFloat(nums[length / 2 - 1]) + parseFloat(nums[length / 2]) / 2.0).toFixed(2)
  } else return parseFloat(nums[(length - 1) / 2]).toFixed(2);
  }
