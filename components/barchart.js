
import React from 'react';
import {
    Text, View,
    StyleSheet,
    ScrollView,
    processColor
  } from 'react-native';
  import {BarChart} from 'react-native-charts-wrapper';

  export function convertToArrayOfObjects(data) {
    var i = 0,
        obj = null,
        output = [];
    for (i = 0; i < data.length; i++) {
        obj = {};
        obj['y'] = data[i];
        output.push(obj);
    }
    return output;
  }

  export function sum(a, b) {
    return a + b;
  }

  export function Barchart( {array}) {
    //  console.log("b101", array)
    // console.log("887", convertToArrayOfObjects(array))
    var data = {
      dataSets: [{
        values: [{y: 100}, {y: 105}, {y: 102}, {y: 110}, {y: 114}, {y: 109}, {y: 105}, {y: 99}, {y: 95}],
        label: 'Bar dataSet',
        config: {
          colors: [processColor('#C0FF8C')],
          barShadowColor: processColor('lightgrey'),
          highlightAlpha: 90,
          highlightColor: processColor('red'),
        }
      }],
      config: {
        barWidth: 0.7,
      }
    }
    var data1 = {
      dataSets: [{
        values: convertToArrayOfObjects(array),
        label: 'data',
        config: {
          colors: [processColor('#80FF8C')],
          barShadowColor: processColor('lightgrey'),
          highlightAlpha: 90,
          highlightColor: processColor('red'),
        }
      }]
    }
    return (
      <View style={styles.container}>
        <View style={styles.chart}>
            <BarChart style={styles.chart} 
            drawGridBackground={true} 
            xAxis= {{enabled: false}}
            yAxis= {{left:{enabled: false},right:{enabled: false}}}
            data={data1}
            />           
        </View>
        <View style={styles.chart}>
            <BarChart style={styles.chart} 
            drawGridBackground={true} 
            xAxis= {{enabled: false}}
            yAxis= {{left:{enabled: false},right:{enabled: false}}}
            data={data}
            />           
        </View>
      </View>
    )

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00FCFF'
    },
    chart: {
      flex: 1
    }
  });