import { useState, useEffect, useRef } from "react";
import React from 'react';
import {
    Text, View
  } from 'react-native';

const delay = 1;


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


export function TimerWrap( {array}) {
    console.log("20", "entry")
  const [counter, setCounter] = useState(0);
  const [bubbleState, setBubbleState] = useState(array);
  const timer = useRef(null); // we can save timer in useRef and pass it to child

  useEffect(() => {
    // useRef value stored in .current property
    // timer.current = setInterval(() => setCounter((v) => v + 1), delay * 1000);
    timer.current = setInterval(() => {
      setCounter((v) => v + 1)
      setBubbleState((b)=> [...b, counter-10])
    }, delay * 1000);

    // clear on component unmount
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
      <View>
      <Text>Interval is working, counter is: {counter} {bubbleState}</Text>
      <Child array={bubbleState} counter={counter} currentTimer={timer.current} />
      </View>
  );
}

function Child({ array, counter, currentTimer }) {
  // this will clearInterval in parent component after counter gets to 5
  const [bubbleState, setBubbleState] = useState(array);
  useEffect(() => {
    setBubbleState(()=> [...bubbleState, counter])
    if (counter < 5) return;

    clearInterval(currentTimer);
  }, [counter, currentTimer]);

  return <Text>{bubbleState}</Text>;
}