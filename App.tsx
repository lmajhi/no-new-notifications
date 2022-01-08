/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/platform/screens/HomeScreen';
import { Text } from 'react-native';
import { navigationRef } from './src/utils/naviagtion';
const NoNewNotificationEpisodeList = () => {
  return (<>
  <Text>This is NoNewNotificationEpisodeList</Text>
  </>)
}
const NoNewNotificationEpisode = () => {
  return (<>
    <Text>This is NoNewNotificationEpisode</Text>
    </>)
}
const screenMap = [
  {
    name: "HomeScreen",
    component: HomeScreen
  },
  {
    name: "NoNewNotificationEpisodeList",
    component: NoNewNotificationEpisodeList
  },
  {
    name: "NoNewNotificationEpisode",
    component: NoNewNotificationEpisode
  },
]
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
