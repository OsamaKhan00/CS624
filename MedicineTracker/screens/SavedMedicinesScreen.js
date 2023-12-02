import React from 'react';
import { View, Text, Button } from 'react-native';

const SavedMedicinesScreen = ({ route }) => {
  const { medicines } = route.params;

  const editMedicine = () => {
    // Implement your logic for editing medicines
  };

  return (
    <View>
      <Text>Saved Medicines</Text>
      {medicines.map((medicine) => (
        <View key={medicine.id}>
          <Text>Name: {medicine.name}</Text>
          <Text>Dose: {medicine.dose}</Text>
          <Text>Time: {new Date(medicine.time).toLocaleTimeString()}</Text>
          <Text>Day: {medicine.day}</Text>
          <Button title="Edit" onPress={editMedicine} />
        </View>
      ))}
    </View>
  );
};

export default SavedMedicinesScreen;
