// @flow

import React, { useState, useRef, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button
  } from 'react-native';


import { Sort } from '../../components/sort'
import { Sort2 } from '../../components/sort2'
import { useSort } from '../../hooks/useSort'

import { day1 } from '../../config/day1'
import { Barchart } from '../../components/barchart'

var intarray = day1().map(x=>+x)

var sortedArray = []



  export function Day01Screen({ navigation }) {

    function handleSortCompleted(sortState){
      console.log("876", sortState)
      sortedArray = sortState.array
      console.log("877", sortedArray)
    }

    console.log("d01screen")
    const obj = useSort(intarray, handleSortCompleted);
    // console.log("335", obj)
    const { array, done, comparisons, swaps } = obj
    // console.log("334", comparisons)
    return (
      <View style={{ flex: 1 }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{ flex: 1 }}>
          <Text>Day 001 challenge</Text>                    
          {/* <View style={ styles.container }><Sort array={intarray}/></View> */}
          {/* <View style={ styles.container }>
            <Sort2 array={intarray} onSortCompleted={handleSortCompleted}>
              {({ array, done, comparisons, swaps }) => (
                <>
                  <Text>Step 02 sort numbers {(done ? 'done' : 'underway')}</Text>
                  <Text>Step 02 comparisons {comparisons}</Text>
                </>
              )}
            </Sort2>
          </View> */}
          <View style={ styles.container }>
              <>
                <Text>Step 01 sort numbers {(done ? 'done' : 'underway')}</Text>
                <Text>Step 01 comparisons {comparisons}</Text>
                <Barchart style={styles.chart} array={array} />
              </>
          </View>
        </View>
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