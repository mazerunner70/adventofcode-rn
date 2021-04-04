// @flow

import React, { useState, useRef, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
  } from 'react-native';
  import {LineChart} from 'react-native-charts-wrapper';


import { Barchart } from '../barchart'

export function GraphDemo() {

    return (
        <View style={ styles.container }>
            <Barchart style={styles.chart} array={{dataSets:[{label: "Bar Chart", values: [5, 12, 3]}]}} />
            <View style={{flex: 1}}>
                <View style={styles.container}>
                  <LineChart style={styles.chart}
                    data={{dataSets:[{label: "demo", values: [{y: 1}, {y: 2}, {y: 1}]}]}}
                  />
                </View>
            </View>
            <View style={{ flex: 1 }}><Barchart array={{dataSets:[{label: "demo", values: [5, 2, 3]}]}} /></View>
            <View style={styles.container}>
                <LineChart style={styles.chart}
                  data={{dataSets:[{label: "demo3", values: [{y: 4}, {y: 2}, {y: 3}]}]}}
                />
            </View>
        </View>
    )

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