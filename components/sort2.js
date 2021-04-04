import React, { useState, useRef, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
  } from 'react-native';

  type BubbleState = {
    array: number[];
    swaps: number;
    comparisons: number;
    i: number;
    j: number;
    done: boolean;
};

function bubbleSortInit(array: number[], done: boolean): BubbleState {
    console.log("122", array)
    return {
        array,
        swaps: 0,
        comparisons: 0,
        i: array.length - 1,
        j: 0,
        done,
    };
}

function bubbleSortStep2(bubbleState: Any): Partial<BubbleState> {
    let { array, swaps, comparisons, i, j, done } = bubbleState
    // console.log("132", bubbleState)
    if (i <= 0) {
        return {
            array,
            done: true
        };
    }
    if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swaps++;
    }
    comparisons++;
    if (++j >= i) {
        i--;
        j = 0;            
    }
    return {
        array,
        swaps,
        comparisons,
        i,
        j,
        done
    };

 
}
function bubbleSortStep(bubbleState: BubbleState): BubbleState {
    let { array, swaps, comparisons, i, j, done } = bubbleState
    // console.log("132", bubbleState)
    if (i <= 0) {
        done = true;
    }
    if (!done) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            swaps++;
        }
        comparisons++;
        if (++j >= i) {
            i--;
            j = 0;            
        }
    }
    return {
        array,
        swaps,
        comparisons,
        i,
        j,
        done
    };
}
export function Sort2({children, array, onSortCompleted}) {
    const [sortState, setSortState] = useState(bubbleSortInit([], true));
    const timer = useRef(null);
    useEffect(() => {
        setSortState(bubbleSortInit(array, false));
        function handleSortEvent() {
            setSortState((b)=> {
                console.log("112", b.done)
                if (b.done) {
                    clearInterval(timer.current);
                    onSortCompleted(b)
                    return b;
                } else {
                    return bubbleSortStep(b);
                }
            })
        };
    
        timer.current = setInterval(() => handleSortEvent(), 10)
        return () => clearInterval(timer.current);
    }, [array]) // Resets whenever 

    return children(sortState)
}

