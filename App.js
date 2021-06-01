import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const boxes = new Array(10).fill(null).map((v, i) => i+1);

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden={false}/>
        {boxes.map(i => (<Box key={i}>#{i}</Box>))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "ghostwhite",
    alignItems: 'center'/*,
    justifyContent: 'center',*/
  },

  box: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "darkslategray",
    margin: 10
  },

  boxText: {
    color: "darkslategray",
    fontWeight: "bold"
  }
});
