import React from 'react';
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import ContactStack from './ContactStack';
const Tab = createBottomTabNavigator();
export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeStack" component={HomeStack} options={{
                title: 'Dogs', tabBarIcon: () => (

                    <Icon
                        name='paw-outline'
                        type='ionicon'
                    />
                )
            }} />
            <Tab.Screen name="ContactStack" component={ContactStack} options={{
                title: 'Cats', tabBarIcon: () => (

                    <Icon
                        name='logo-github'
                        type='ionicon'
                    />
                )
            }} />
            {/* <Tab.Screen name="AboutStack" component={AboutStack} options={{ title: 'About' }} /> */}
        </Tab.Navigator>
    );
}