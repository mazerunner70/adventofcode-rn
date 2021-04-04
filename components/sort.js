// @flow

import React, { useState, useRef, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
  } from 'react-native';


import { Barchart } from './barchart'

  type BubbleState = {
    array: number[];
    swaps: number;
    comparisons: number;
    i: number;
    j: number;
    done: boolean;
};

function bubbleSortInit(array: number[]): BubbleState {
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

export function Sort(props) {

    const [bubbleState, setBubbleState] = useState(null);
    const [rendered, setRendered] = React.useState([]);
    const timer = useRef(null);

    React.useEffect(() => {
        console.log("s120", props.array);
        setBubbleState(bubbleSortInit(props.array));
        setRendered([]);
      }, [props.array]);

    function handleSortEvent() {
        // console.log("s124", bubbleState, "-", timer.current)
        // console.log("s127", timer.current)
        setBubbleState((b)=> {
            if (b?.done) {
                clearInterval(timer.current);
                return b;
            } else {
                return bubbleSortStep(b);
            }
        })
    };

    useEffect(() => {
        timer.current = setInterval(() => handleSortEvent(), 10)
        return () => clearInterval(timer.current);
    }, []);

    useEffect(() => {
        // console.log("s120", bubbleState)
        // console.log("s121", bubbleState?.array? bubbleState.array: [])
        setRendered(bubbleState?.array? bubbleState.array: [])
    }, [bubbleState])

    return (
        <View style={styles.container}>
            {/* <Text>SInterval is working, { rendered}</Text> */}
            <Barchart style={styles.chart} array={[...rendered]} />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF'
    },
    chart: {
      flex: 1
    }
  });