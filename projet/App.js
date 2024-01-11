import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './screens/SignUp';

import Login from './screens/Login'




const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen name="Login" component={Login} />



        {/* <Stack.Screen name="UserModificationPage" component={UserModificationPage} /> */}
      </Stack.Navigator>







    </NavigationContainer>
  );
};

export default App;