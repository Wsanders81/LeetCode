//** */ 3. Longest Substring Without Repeating Characters

//** */ 424. Longest Repeating Character Replacement

//** */ 76. Minimum Window Substring

//** */ 242. Valid Anagram
function isAnagram(s, t) {
	if (s.length !== t.length) return false;
	const sFreq = freqCounter(s);
	const tFreq = freqCounter(t);

	function freqCounter(str) {
		const freq = {};
		for (let letter of str) {
			freq[letter] = freq[letter]
				? (freq[letter] += 1)
				: (freq[letter] = 1);
		}
		return freq;
	}

	for (let key in sFreq) {
		if (!tFreq[key]) return false;
		if (sFreq[key] > tFreq[key]) return false;
	}
	return true;
}
// console.log(isAnagram('anagram', 'ngaram'));
//** */ 49. Group Anagrams

//** */ 20. Valid Parentheses
function isValid(s) {
	const parenStack = [];

	for (let symbol of s) {
		if (symbol === '(') {
			parenStack.push(symbol);
		}
		else if (symbol === '{') {
			parenStack.push(symbol);
		}
		else if (symbol === '[') {
			parenStack.push(symbol);
		}
		if (symbol === ')') {
			if (parenStack.length === 0) {
				return false;
			}
			else {
				const paren = parenStack.pop();
				if (paren !== '(') return false;
			}
		}
		else if (symbol === '}') {
			if (parenStack.length === 0) {
				return false;
			}
			else {
				const paren = parenStack.pop();
				if (paren !== '{') return false;
			}
		}
		else if (symbol === ']') {
			if (parenStack.length === 0) {
				return false;
			}
			else {
				const paren = parenStack.pop();
				if (paren !== '[') return false;
			}
		}
	}
	if (parenStack.length === 0) return true;
	return false;
}
// console.log(isValid('([])'));

//** */ 125. Valid Palindrome
// two pointers
function isPalindrome(s) {
	s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

	console.log(s);
	let left = 0;
	let right = s.length - 1;
	while (left < right) {
		if (s[left] !== s[right]) {
			return false;
		}
		left++;
		right--;
	}
	return true;
}
console.log(isPalindrome('0P'));

const obj = {
	a : 1,
	b : 2,
	c : 3
};
