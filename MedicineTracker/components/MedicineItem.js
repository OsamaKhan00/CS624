// MedicineItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MedicineItem = ({ medicine }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.medicineName}>{medicine.name}</Text>
      <Text style={styles.medicineDose}>{medicine.dose}</Text>
      <Text style={styles.medicineTime}>{`Time: ${new Date(medicine.time).toLocaleTimeString()}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  medicineName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#3498db', // Blue color for emphasis
  },
  medicineDose: {
    fontSize: 18,
    marginBottom: 5,
  },
  medicineTime: {
    fontSize: 16,
    color: 'gray',
  },
});

export default MedicineItem;
