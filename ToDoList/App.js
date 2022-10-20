/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';

const App: () => Node = () => {

  const [listOfItems, setListOfItems] = useState([
    {text: 'Go to the grocery shop', key: '1'},
    {text: 'Learn React Native', key: '2'},
    {text: 'Go to gym', key: '3'},
    {text: 'Buy new Mac', key: '4'},
    {text: 'Cook dinner', key: '5'},
  ]);

  const addHandler = (textIn) => {
    setListOfItems((list) => {
      return [
        { text: textIn, key: Math.random().toString(36).substring(7)},
        ...list
      ];
    });
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    });
  };

  return (
    <SafeAreaView style={styles.main}>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({item}) => ( 
          <ListItem el={item} deleteHandler={deleteHandler}/>
          )} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#EEEEEE',
  },
});

export default App;
