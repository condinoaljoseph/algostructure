function twoSum(nums: number[], target: number): number[] {
	const nMap = new Map();
	for (let i: number = 0; i <= nums.length; i++) {
		let x: number = nums[i];
		if (nMap.has(target - x)) {
			return [nMap.get(target - x), i];
		}
		nMap.set(x, i);
	}

	return [-1, -1];
}

module.exports = twoSum;
