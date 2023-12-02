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
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  medicineName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  medicineDose: {
    fontSize: 16,
  },
  medicineTime: {
    fontSize: 14,
    color: 'gray',
  },
});

export default MedicineItem;
