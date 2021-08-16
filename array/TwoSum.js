// https://leetcode.com/problems/two-sum/
//
//     Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//     You can return the answer in any order.
//
// Constraints: 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

const twoSum = function (nums, target) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i])) {
            console.log(map.get(target - nums[i]), i);
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
};

nums = [2,7,11,15];
target = 9;

twoSum(nums, target);