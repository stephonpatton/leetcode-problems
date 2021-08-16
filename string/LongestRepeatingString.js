// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// 	Given a string s, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	let map = new Map();
	let highestCount = 0;
	for(let i = 0; i < s.length; i++) {
		if(map.has(s.charAt(i))) {
			highestCount = map.size;
			map.clear();
		} else {
			map.set(s.charAt(i), i);
			highestCount++;
		}
	}
	return highestCount;
};