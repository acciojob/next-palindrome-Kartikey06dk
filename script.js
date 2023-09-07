function nextPalindrome(num) {
  while (true) {
    num++;
    if (isPalindrome(num)) {
      return num;
    }
  }
}

function isPalindrome(number) {
  const str = String(number);
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

const input = prompt("Enter a palindrome number");
const parsedInput = parseInt(input);

if (isNaN(parsedInput) || parsedInput <= 0) {
  alert("Invalid input. Please enter a positive integer.");
} else {
  const result = nextPalindrome(parsedInput);
  alert(`The next palindrome is: ${result}`);
}
