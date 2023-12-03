// SavedMedicineItem.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SavedMedicineItem = ({ medicine, onEditPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {medicine.name}</Text>
      <Text style={styles.text}>Dose: {medicine.dose}</Text>
      <Text style={styles.text}>Time: {new Date(medicine.time).toLocaleTimeString()}</Text>
      <Text style={styles.text}>Day: {medicine.day}</Text>
      <Button title="Edit" onPress={() => onEditPress(medicine)} color="#3498db" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333', // Dark gray text color
  },
});

export default SavedMedicineItem;
