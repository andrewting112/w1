# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @andrewting112/lotide`

**Require it:**

`const _ = require('@andrewting112/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `assertArrayEqual`: returns true if arrays are equal to each other
* `assertEqualTest `: returns true if primitive arguements are equal
* `equalArray`: returns true if arrays are equal
* `head`: takes an array as an arguement, then returns a new array with only the first index of the original array.
* `middle`: takes an array as an arguement. Returns the middle value if the length of the array is odd and returns both middle values if array is even.
* `tail`: takes an array as an arguement, then returns a new array without the first index of the original array.



