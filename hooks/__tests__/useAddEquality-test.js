// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import {compareAdds, advanceIndexes, checkDone} from '../useAddEquality';

test('shows done1', () => {
    expect([1, 2, 3].map(i=>[1, 2, 3, 4][i]).reduce((a, b) => a + b, 0)).toBe(9)   
});
test('shows done2', () => {
    expect(checkDone([1, 2, 3, 4], 30, [1, 2, 3, 4])).toBe(true)
    expect(checkDone([1, 2, 3, 4], 30, [1, 2, 3])).toBe(false)
    expect(checkDone([1, 2, 3, 4], 8, [1, 2, 3])).toBe(true)  
    expect(checkDone([1, 2, 3, 4, 5, 6, 7, 8], 12, [0, 1, 2])).toBe(false)
    });
test('shows index advance 1', () => {
    expect(advanceIndexes([1, 2, 3, 4, 5], 30, [1, 2, 3], 2)).toEqual([1, 2, 4])
    expect(advanceIndexes([1, 2, 3, 4, 5], 30, [1, 2, 4], 2)).toEqual([1, 3, 4])
    expect(advanceIndexes([1, 2, 3, 4, 5, 6, 7, 8], 30, [1, 2, 7], 2)).toEqual([1, 3, 4])
    expect(advanceIndexes([1, 2, 3, 4, 5, 6, 7, 8], 30, [1, 6, 7], 2)).toEqual([2, 3, 4])
});

test('shows compare adds 1', () => {
    expect(compareAdds([1, 2, 3, 4, 5, 6], 9, [0, 1, 2],false)).toEqual(
        {"done": false, "indexes": [0, 1, 3], "sourceArray": [1, 2, 3, 4, 5, 6], "targetInt": 9});
    expect(compareAdds([1, 2, 3, 4, 5, 6 ], 9, [0, 1, 3],false)).toEqual(
        {"done": false, "indexes": [0, 1, 4], "sourceArray": [1, 2, 3, 4, 5, 6], "targetInt": 9});
    expect(compareAdds([1, 2, 3, 4, 5, 6 ], 9, [0, 1, 4],false)).toEqual(
        {"done": false, "indexes": [0, 1, 5], "sourceArray": [1, 2, 3, 4, 5, 6], "targetInt": 9});
    expect(compareAdds([1, 2, 3, 4, 5, 6 ], 9, [0, 1, 5],false)).toEqual(
        {"done": true, "indexes": [0, 1, 5], "sourceArray": [1, 2, 3, 4, 5, 6], "targetInt": 9});                    
});
test('shows compare adds 2', () => {
    expect(compareAdds([1, 2, 3, 4, 5, 6], 13, [0, 1, 5],false)).toEqual(
        {"done": false, "indexes": [0, 2, 3], "sourceArray": [1, 2, 3, 4, 5, 6], "targetInt": 13});
    expect(compareAdds([1, 2, 3, 4, 5, 6 ], 13, [0, 2, 3],false)).toEqual(
        {"done": false, "indexes": [0, 2, 4], "sourceArray": [1, 2, 3, 4, 5, 6], "targetInt": 13});
    expect(compareAdds([1, 2, 3, 4, 5, 6 ], 13, [0, 2, 4],false)).toEqual(
        {"done": false, "indexes": [0, 2, 5], "sourceArray": [1, 2, 3, 4, 5, 6], "targetInt": 13});
    expect(compareAdds([1, 2, 3, 4, 5, 6 ], 13, [0, 2, 5],false)).toEqual(
        {"done": false, "indexes": [0, 3, 4], "sourceArray": [1, 2, 3, 4, 5, 6], "targetInt": 13});                    
    expect(compareAdds([1, 2, 3, 4, 5, 6 ], 13, [0, 3, 4],false)).toEqual(
        {"done": false, "indexes": [0, 3, 5], "sourceArray": [1, 2, 3, 4, 5, 6], "targetInt": 13});                    
    expect(compareAdds([1, 2, 3, 4, 5, 6 ], 13, [0, 3, 5],false)).toEqual(
        {"done": false, "indexes": [0, 4, 5], "sourceArray": [1, 2, 3, 4, 5, 6], "targetInt": 13});                    
    expect(compareAdds([1, 2, 3, 4, 5, 6 ], 13, [0, 4, 5],false)).toEqual(
        {"done": false, "indexes": [1, 2, 3], "sourceArray": [1, 2, 3, 4, 5, 6], "targetInt": 13});                    
    expect(compareAdds([1, 2, 3, 4, 5, 6 ], 13, [1, 2, 3],false)).toEqual(
        {"done": false, "indexes": [1, 2, 4], "sourceArray": [1, 2, 3, 4, 5, 6], "targetInt": 13});                    
    expect(compareAdds([1, 2, 3, 4, 5, 6 ], 13, [1, 2, 4],false)).toEqual(
        {"done": false, "indexes": [1, 2, 5], "sourceArray": [1, 2, 3, 4, 5, 6], "targetInt": 13});                    
    expect(compareAdds([1, 2, 3, 4, 5, 6 ], 13, [1, 2, 5],false)).toEqual(
        {"done": false, "indexes": [1, 3, 4], "sourceArray": [1, 2, 3, 4, 5, 6], "targetInt": 13});                    
    expect(compareAdds([1, 2, 3, 4, 5, 6 ], 13, [1, 3, 4],false)).toEqual(
        {"done": false, "indexes": [1, 3, 5], "sourceArray": [1, 2, 3, 4, 5, 6], "targetInt": 13});                    
    expect(compareAdds([1, 2, 3, 4, 5, 6 ], 13, [1, 3, 5],false)).toEqual(
        {"done": false, "indexes": [1, 4, 5], "sourceArray": [1, 2, 3, 4, 5, 6], "targetInt": 13});                    
    expect(compareAdds([1, 2, 3, 4, 5, 6 ], 13, [1, 4, 5],false)).toEqual(
        {"done": true, "indexes": [1, 4, 5], "sourceArray": [1, 2, 3, 4, 5, 6], "targetInt": 13});                    
});