// https://leetcode.com/problems/reverse-linked-list/
// Given the head of a singly linked list, reverse the list, and return the reversed list.


function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	let prev = null;
	while(head) {
		const temp = head.next;
		head.next = prev;
		prev = head;
		head = temp;
	}
	return prev;
};

