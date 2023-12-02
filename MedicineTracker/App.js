import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddMedicineScreen from './screens/AddMedicineScreen';
import SavedMedicinesScreen from './screens/SavedMedicinesScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddMedicine" component={AddMedicineScreen} />
        <Stack.Screen name="SavedMedicines" component={SavedMedicinesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
