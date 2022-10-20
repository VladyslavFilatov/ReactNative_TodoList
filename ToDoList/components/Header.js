import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>To do List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 40,
    height: 100,
    backgroundColor: 'silver',
  },
  text: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});

export default Header;
