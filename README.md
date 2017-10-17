# is-palindrome-number
Determines if a number is a palindrome.

![npm](https://img.shields.io/npm/v/is-palindrome-number.svg) ![license](https://img.shields.io/npm/l/is-palindrome-number.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/is-palindrome-number.svg)  


![travis-status](https://img.shields.io/travis/Prosen-Ghosh/is-palindrome-number.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/is-palindrome-number.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/is-palindrome-number.svg)

## Features


## Install

`npm install --save is-palindrome-number`


## Usage

```js

const isNumberPalindrome = require('is-palindrome-number');

isNumberPalindrome(123);
//=> false

isNumberPalindrome(12321);
//=> true

isNumberPalindrome('12321');
//=> TypeError: expects number got string

isNumberPalindrome(); // without parameter this function will throw a type error
//=> TypeError: expects number got undefined

```

## Author

Prosen Ghosh <prosenghosh25@gmail.com> (https://bd.linkedin.com/in/prosen-ghosh-baba9aa8)

## License

 - **MIT**
