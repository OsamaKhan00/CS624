import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import ActionSheet from 'react-native-action-sheet';
import { Medicine } from '../models/Medicine';

const SavedMedicinesScreen = ({ route }) => {
  const { medicines, onEditMedicine, onRemoveMedicine } = route.params;
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const showOptions = (medicine) => {
    setSelectedMedicine(medicine);
    setModalVisible(true);
  };

  const hideOptions = () => {
    setModalVisible(false);
  };

  const handleEdit = () => {
    hideOptions();
    onEditMedicine(selectedMedicine);
  };

  const handleRemove = () => {
    hideOptions();
    Alert.alert(
      'Confirm Removal',
      `Are you sure you want to remove ${selectedMedicine.name}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            onRemoveMedicine(selectedMedicine);
          },
        },
      ]
    );
  };

  const handleEditButtonPress = () => {
    if (selectedMedicine) {
      const options = ['Edit', 'Remove', 'Cancel'];
      const cancelButtonIndex = 2;

      ActionSheet.showActionSheetWithOptions(
        {
          options,
          cancelButtonIndex,
        },
        (buttonIndex) => {
          if (buttonIndex === 0) {
            handleEdit();
          } else if (buttonIndex === 1) {
            handleRemove();
          }
        }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Medicines</Text>
      {medicines.map((medicine) => (
        <View key={medicine.id} style={styles.medicineContainer}>
          <Text>Name: {medicine.name}</Text>
          <Text>Dose: {medicine.dose}</Text>
          <Text>Time: {medicine.time.toLocaleTimeString()}</Text>
          <Text>Day: {medicine.day}</Text>
          <TouchableOpacity style={styles.editButton} onPress={() => showOptions(medicine)}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
      ))}
      <Modal isVisible={isModalVisible} onBackdropPress={hideOptions}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalButton} onPress={handleEdit}>
            <Text style={styles.modalButtonText}>Edit Medicine</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.modalButton, { backgroundColor: 'red' }]} onPress={handleRemove}>
            <Text style={styles.modalButtonText}>Remove Medicine</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={hideOptions}>
            <Text style={styles.modalButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  medicineContainer: {
    marginBottom: 16,
  },
  editButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 8,
  },
  editButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  modalButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 8,
  },
  modalButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default SavedMedicinesScreen;
