import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Medicine } from '../models/Medicine';
import PushNotification from 'react-native-push-notification';

const AddMedicineScreen = ({ route, navigation }) => {
  const { onAddMedicine } = route.params;
  const [medicineName, setMedicineName] = useState('');
  const [medicineDose, setMedicineDose] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDayPicker, setShowDayPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());

  const showTimepicker = () => {
    setShowTimePicker(true);
    setShowDayPicker(false);
  };

  const showDaypicker = () => {
    setShowDayPicker(true);
    setShowTimePicker(false);
  };

  const hidePicker = () => {
    setShowTimePicker(false);
    setShowDayPicker(false);
  };

  const handleTimeChange = (event, selected) => {
    hidePicker();
    if (selected) {
      setSelectedTime(selected);
    }
  };

  const handleDayChange = (event, selected) => {
    hidePicker();
    if (selected) {
      setSelectedDay(selected);
    }
  };

  const addMedicine = () => {
    if (!selectedTime || !selectedDay) {
      return;
    }

    const formattedTime = selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const formattedDay = selectedDay.toLocaleDateString();

    const newMedicine = Medicine(
      Date.now().toString(),
      medicineName,
      medicineDose,
      selectedTime,
      formattedDay
    );

    // Schedule notification
    scheduleNotification(newMedicine);

    onAddMedicine(newMedicine);
    navigation.goBack();
  };

  const scheduleNotification = (medicine) => {
    const notificationTime = new Date(medicine.time);
    
    PushNotification.localNotificationSchedule({
      id: medicine.id,
      message: `It's time to take ${medicine.name} (${medicine.dose})!`,
      date: notificationTime,
    });
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
      <TouchableOpacity style={styles.button} onPress={showTimepicker}>
        <Text style={styles.buttonText}>Select Time</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={showDaypicker}>
        <Text style={styles.buttonText}>Select Day</Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handleTimeChange}
        />
      )}
      {showDayPicker && (
        <DateTimePicker
          value={selectedDay}
          mode="date"
          display="default"
          onChange={handleDayChange}
        />
      )}
      {selectedTime && (
        <Text style={styles.selectedDateTime}>
          Selected Time: {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      )}
      {selectedDay && (
        <Text style={styles.selectedDateTime}>
          Selected Day: {selectedDay.toLocaleDateString()}
        </Text>
      )}
      <TouchableOpacity style={styles.button} onPress={addMedicine}>
        <Text style={styles.buttonText}>Add Medicine</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  selectedDateTime: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default AddMedicineScreen;
