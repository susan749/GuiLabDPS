import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Contact from '../Contact';
const Stack = createStackNavigator();
export default function ContactStack() {
    return (
        <Stack.Navigator  screenOptions={{
            headerShown: false,}}>
            <Stack.Screen name="contact" component={Contact}
                options={{ title: 'Cats' }} />
        </Stack.Navigator>
    );
}
