import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Button from '../Components/Button/Button';
import { NavigationContainer } from '@react-navigation/native';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import AntIcons from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: '#000',
                        borderTopColor: 'rgba(255, 255, 255, 0.3)'
                    },
                    tabBarActiveTintColor: '#fff',
                    headerShown: false

                }}
            >
                <Tab.Screen
                name='Home'
                component={Home}
                options={{ tabBarIcon: ({ size, color }) => <EntypoIcons name='home' size={size} color={color} />}}
                />
                <Tab.Screen
                name='Discover'
                component={Home}
                options={{ tabBarIcon: ({ size, color }) => <EntypoIcons name='compass' size={size} color={color} />}}o
                />
                <Tab.Screen
                name='New'
                component={Home}
                options={{
                    title: '', 
                    tabBarIcon: ({ size, color }) => {
                        return <Button />
                }}}
                />
                <Tab.Screen
                name='Inbox'
                component={Home}
                options={{ tabBarIcon: ({ size, color }) => <Ionicons name='md-chatbox-outline' size={size} color={color} />}}
                />
                <Tab.Screen
                name='Profile'
                component={Home}
                options={{ tabBarIcon: ({ size, color }) => <AntIcons name='user' size={size} color={color} />}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}