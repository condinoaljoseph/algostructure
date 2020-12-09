function twoSum(nums, target) {
    var nMap = new Map();
    for (var i = 0; i <= nums.length; i++) {
        var x = nums[i];
        if (nMap.has(target - x)) {
            return [nMap.get(target - x), i];
        }
        nMap.set(x, i);
    }
    return [-1, -1];
}
module.exports = twoSum;
