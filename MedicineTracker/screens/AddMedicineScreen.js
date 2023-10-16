import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const AddMedicineScreen = () => {
  return (
    <View>
      <Text>Add Medicine</Text>
      <TextInput placeholder="Medicine Name" />
      <TextInput placeholder="Dose" />
      <TextInput placeholder="Time" />
      <Button title="Add Medicine" onPress={() => {}} />
    </View>
  );
};

export default AddMedicineScreen;
