import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
const Stack = createStackNavigator();
export default function HomeStack() {
    return (
       <Stack.Navigator screenOptions={{
        headerShown: false,}}
       >
             <Stack.Screen name="home" component={Home}
                options={{ title: 'Dogs' }} />
        </Stack.Navigator>
    );
}