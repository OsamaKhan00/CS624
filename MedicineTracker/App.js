import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddMedicineScreen from './screens/AddMedicineScreen';
import SavedMedicinesScreen from './screens/SavedMedicinesScreen';
import PushNotification from 'react-native-push-notification';

const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    // Initialize push notifications
    PushNotification.configure({
      onNotification: function (notification) {
        // Handle notification click or other events
        console.log('Notification:', notification);
      },
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3498db',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Medicine Tracker' }} />
        <Stack.Screen name="AddMedicine" component={AddMedicineScreen} options={{ title: 'Add Medicine' }} />
        <Stack.Screen name="SavedMedicines" component={SavedMedicinesScreen} options={{ title: 'Saved Medicines' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
