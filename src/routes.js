import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import User from './pages/User';
import Main from './pages/Main';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: 'false',
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          title: 'Dashboard',
        }}
      />
      <Stack.Screen
        name="User"
        component={User}
        ptions={{
          title: 'Usuários',
        }}
      />
    </Stack.Navigator>
  );
}
