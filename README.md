# Nahman

---

** NOTE: ** _This library was mostly conceived as an exercise, using functional programming, TDD and rollup.js._

A small utility library for converting arrays into a "stepped arrays".

A stepped array is an array where each member is a sub-array of the original, the first member is `[1]`, the second is `[1 ➜ 2]` and the last member is `[1 ➜ n]`.

For an example, if our array is `[1, 2, 3]`, our output should be:

```
[
  [1],
  [1, 2],
  [1, 2, 3]
]
```

## Installation

```
npm i --save @eidellev/nahman
# or
yarn add @eidellev/nahman
```

## Usage

```javascript
import nahman from '@eidellev/nahman';
// or
const nahman = require('@eidellev/nahman');
```

## Methods

- `toSteps` - Converts an array into a stepped array
- `toStepsRight` - Converts an array into a stepped array from right to left, e.g:

```
[1, 2, 3] ➜ [[1, 2, 3], [2, 3], [3]]
```
