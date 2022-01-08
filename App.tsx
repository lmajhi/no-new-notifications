import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef, screenMap } from './src/utils/naviagtion';

const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="HomeScreen" >
        {
          screenMap.map(screenItem => <Stack.Screen  name={screenItem.name} component={screenItem.component}/>)
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
