import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SavedMedicineItem = ({ medicine, onEditPress }) => {
  return (
    <View style={styles.container}>
      <Text>Name: {medicine.name}</Text>
      <Text>Dose: {medicine.dose}</Text>
      <Text>Time: {new Date(medicine.time).toLocaleTimeString()}</Text>
      <Text>Day: {medicine.day}</Text>
      <Button title="Edit" onPress={() => onEditPress(medicine)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});

export default SavedMedicineItem;
