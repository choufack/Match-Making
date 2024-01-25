import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import index from './screens/drawer/index';



// 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="profile" component={index} />

     
      
      
        {/* <Stack.Screen name="UserModificationPage" component={UserModificationPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
