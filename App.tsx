import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './navigation/types';
import FrontPage from './screens/FrontPage';
import CarListPage from './screens/CarListPage';
import CheckoutPage from './screens/CheckoutPage';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FrontPage">
        <Stack.Screen name="FrontPage" component={FrontPage} />
        <Stack.Screen name="CarListPage" component={CarListPage} />
        <Stack.Screen name="CheckoutPage" component={CheckoutPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
