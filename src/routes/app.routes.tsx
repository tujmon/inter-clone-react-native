import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { SingIn } from "../screens/SingIn";
import { Extract } from "../screens/Extract"
import { Home } from "../screens/Home";
const {Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen
      name="singin"
      component={SingIn}
      />
      <Screen
      name="home"
      component={Home}
      />
      <Screen
      name="extract"
      component={Extract}
      />
    </Navigator>
  )
}