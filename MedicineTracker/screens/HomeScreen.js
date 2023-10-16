import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Medicine } from '../models/Medicine';
import MedicineItem from '../components/MedicineItem';

const HomeScreen = () => {
  const [medicines, setMedicines] = useState([]);

  const addMedicine = () => {
    const newMedicine = Medicine(
      medicines.length + 1,
      'Medicine Name',
      '10mg',
      new Date()
    );
    setMedicines([...medicines, newMedicine]);
  };

  return (
    <View>
      <Text>Medication Tracker Home Screen</Text>
      <Button title="Add Medicine" onPress={addMedicine} />
      {medicines.map((medicine) => (
        <MedicineItem key={medicine.id} medicine={medicine} />
      ))}
    </View>
  );
};

export default HomeScreen;
