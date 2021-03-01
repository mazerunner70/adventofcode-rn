
// @flow

import React, { useState, useRef, useEffect } from 'react';
import {
    Text
  } from 'react-native';


type BubbleState = {
    array: number[];
    swaps: number;
    comparisons: number;
    i: number;
    j: number;
    done: boolean;
};


function bubbleSortInit(array: number[]): State {
    console.log("122", array)
    return {
        array,
        swaps: 0,
        comparisons: 0,
        i: array.length - 1,
        j: 0,
        done: false,
    };
}

function bubbleSortStep(bubbleState: Any): Partial<BubbleState> {
    // let ini: BubbleState = new Object()
    // if (!bubbleState.i !== undefined ) {
    //     ini.array = bubbleState;
    //     ini.swaps =0;
    //     ini.comparisons = 0;
    //     ini.i = bubbleState.length-1
    //     ini.j = 0
    // } else
    //     ini = bubbleState 
    // console.log("132", ini)
    // let { array, swaps, comparisons, i, j } = ini;
   
    let { array, swaps, comparisons, i, j, done } = bubbleState
    console.log("132", bubbleState)
    if (i <= 0) {
        return {
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
const BubbleSort = ( {array} ) => {
    console.log("120", "entry")
    const [bubbleState, setBubbleState] = useState(null);

    const timer = useRef(null);
    const handleTimer = () => {
        console.log("124", bubbleState)
        console.log("127", timer.current)
        if (bubbleState.done) {
            clearInterval(timer.current);
        } else {
            setBubbleState(()=>bubbleSortStep(bubbleState));
        }
    };
    
    useEffect(() => {
        console.log("121", bubbleState)
        setBubbleState(bubbleSortInit(array));
        console.log("123", bubbleState)
      // save intervalId to clear the interval when the
      // component re-renders
      timer.current = setInterval(() => {
        console.log("129", bubbleState)
        // setBubbleState((b)=> bubbleSortStep(b))
        setBubbleState((b)=> {
            console.log("130", b)
            if (b.done) {
                clearInterval(timer.current);
                return b;
            } else {
                return bubbleSortStep(b);
            }
        });
      }, 250);
  
      // clear interval on re-render to avoid memory leaks
      return () => clearInterval(timer.current);
      // add timeLeft as a dependency to re-rerun the effect
      // when we update it
    }, []);
  
    return (
      <Text>{bubbleState?.done}</Text>
    );
  };

export { BubbleSort }