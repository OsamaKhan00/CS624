import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Medicine } from '../models/Medicine';

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
    navigation.navigate('SavedMedicines', {
      medicines,
      onEditMedicine: handleEditMedicine,
      onRemoveMedicine: handleRemoveMedicine,
    });
  };

  const handleEditMedicine = (medicine) => {
    // Implement the logic for editing a medicine
    // You can navigate to the edit screen or show a modal for editing
  };

  const handleRemoveMedicine = (medicine) => {
    // Implement the logic for removing a medicine
    // Remove the medicine from the state or the database
    const updatedMedicines = medicines.filter((item) => item.id !== medicine.id);
    setMedicines(updatedMedicines);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medication Tracker Home Screen</Text>
      <TouchableOpacity style={styles.button} onPress={addMedicine}>
        <Text style={styles.buttonText}>Add Medicine</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={viewSavedMedicines}>
        <Text style={styles.buttonText}>View Saved Medicines</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue', // Set your desired button color
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white', // Set your desired text color
    textAlign: 'center',
  },
});

export default HomeScreen;
