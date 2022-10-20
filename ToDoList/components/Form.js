import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import React, {Component, useState} from 'react';

export function Form({addHandler}) {
  const [textIn, setValue] = useState('');

  const onChange = textIn => {
    setValue(textIn);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Write task..."
      />
      <Button color="green" onPress={() => addHandler(textIn)} title="Add task" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginVertical: 30,
    marginHorizontal: '20%',
    width: '60%',
  },
});

export default Form;
