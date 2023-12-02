import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Medicine } from '../models/Medicine';

const AddMedicineScreen = ({ route, navigation }) => {
  const { onAddMedicine } = route.params;
  const [medicineName, setMedicineName] = useState('');
  const [medicineDose, setMedicineDose] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    setSelectedDate(date.toISOString());
    hideDatePicker();
  };

  const addMedicine = () => {
    if (!selectedDate) {
      // Handle the case where the date is not selected
      return;
    }

    const newMedicine = Medicine(
      Date.now().toString(),
      medicineName,
      medicineDose,
      selectedDate,
      // You might want to add a way to select the day as well
      // For now, I'm using the current day
      new Date(selectedDate).toLocaleDateString()
    );
    onAddMedicine(newMedicine);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Medicine</Text>
      <TextInput
        style={styles.input}
        placeholder="Medicine Name"
        value={medicineName}
        onChangeText={(text) => setMedicineName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Dose"
        value={medicineDose}
        onChangeText={(text) => setMedicineDose(text)}
      />
      <Button title="Select Time" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />
      <Button title="Add Medicine" onPress={addMedicine} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default AddMedicineScreen;
