import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Medicine } from '../models/Medicine';
import MedicineItem from '../components/MedicineItem';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [medicines, setMedicines] = useState([]);

  const addMedicine = () => {
    navigation.navigate('AddMedicine', { onAddMedicine: handleAddMedicine });
  };

  const handleAddMedicine = (newMedicine) => {
    setMedicines([...medicines, newMedicine]);
  };

  const viewSavedMedicines = () => {
    navigation.navigate('SavedMedicines', { medicines });
  };

  return (
    <View>
      <Text>Medication Tracker Home Screen</Text>
      <Button title="Add Medicine" onPress={addMedicine} />
      <Button title="View Saved Medicines" onPress={viewSavedMedicines} />
    </View>
  );
};

export default HomeScreen;
