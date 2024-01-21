import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const List = ({ initialValues }) => {
  const [toDos, settoDos] = useState(initialValues.map((value) => ({ id: uuidv4(), task: value })));

  const addToDo = (newTitle) => {
    const newToDo = { id: uuidv4(), task: newTitle };
    settoDos((prevtoDos) => [...prevtoDos, newToDo]);
  };

  const removeToDo = (id) => {
    const newToDoList = toDos.filter((List) => List.id !== id);
    settoDos(newToDoList);
  };

  return (
    <View style={styles.container}>
      {toDos.map((List) => (
        <View key={List.id}>
          <Text style={styles.text}>Task: {List.task}</Text>
          <View style={styles.buttonContainer}>
          <Button title="Remove Task" onPress={() => removeToDo(List.id)} /> 
          </View>
        </View>
      ))}
      <AddTask onAddTask={addToDo} />
    </View>
  );
};

List.defaultProps = {
  initialValues: [0],
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default List;
