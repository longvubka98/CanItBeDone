import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import Snapchat from "./src/SnapChat";
import PhilzCoffee from "./src/PhilzCoffee";
import ListProject from './src/ListProject'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='ListProject'
          component={ListProject}
        />
        <Stack.Screen
          name="PhilzCoffee"
          component={PhilzCoffee}
          options={{
            title: "☕️ Philz Coffee",
          }}
        />
        <Stack.Screen
          name='Snapchat'
          component={Snapchat}
          options={{
            title: "👻 Snapchat",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App