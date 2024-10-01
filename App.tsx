import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './navigation/types';
import FrontPage from './screens/FrontPage';
import CarListPage from './screens/CarListPage';
import CheckOutPage from './screens/CheckOutPage';

// Define the type for the navigation stack
export type RootStackParamList = {
  FrontPage: undefined;
  CarListPage: undefined;
};

// Create the Stack Navigator
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FrontPage">
        <Stack.Screen name="FrontPage" component={FrontPage} />
        <Stack.Screen name="CarListPage" component={CarListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
