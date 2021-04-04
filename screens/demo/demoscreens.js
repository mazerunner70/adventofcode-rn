// @flow

import React, { useState, useRef, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button
  } from 'react-native';

  import { GraphDemo } from '../../components/demo/graph'
  import TimeOutDemo from '../../components/demo/timeout'
  

  export let demoScreensList = {
    GraphDemo: GraphDemosScreen,
    TimerDemo: TimerDemoScreen,
  };  

  export function DemosScreen({ navigation }) {
    console.log("111")
    return (
      <View style={{ flex: 1 }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{ flex: 1 }}>
          <Text>Function Demo</Text>
          <Button
            title="Graph Tool"
            onPress={() => navigation.navigate('GraphDemo')}
          />
          <Button
            title="Timout Demo"
            onPress={() => navigation.navigate('TimerDemo')}
          />
        </View>
      </View>
    );
  }
  
  function GraphDemosScreen({ navigation }) {
    console.log("gds")
    return (
      <View style={{ flex: 1 }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{ flex: 1 }}>
          <Text>Graph Demo</Text>
          <GraphDemo/>
        </View>
      </View>
    );
  }
  
  function TimerDemoScreen({navigation}) {
    console.log("tds", GraphDemo)
    return (
      <View style={{ flex: 1 }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{ flex: 1 }}>
          <Text>Timeout Demo</Text>
        </View>
        <TimeOutDemo/>
      </View>
    );
  
  }
  
  