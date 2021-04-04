// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import {Barchart, sum,convertToArrayOfObjects} from '../barchart';

test('generates dataset correctly', () => {
  const array = convertToArrayOfObjects([1,2, 3, 4]);
  expect(sum(1, 2)).toBe(3);
  expect(array.length).toBe(4);
  expect(array).toEqual([ { y: 1 }, { y: 2 }, { y: 3 }, { y: 4 } ])
});
