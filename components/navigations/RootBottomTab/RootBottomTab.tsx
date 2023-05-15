import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { HomeScreen } from "./screens/HomeScreen";
import { TrainerScreen } from "./screens/TrainerScreen";
import { StudentScreen } from "./screens/StudentScreen";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const RootBottomTab: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <FontAwesome name="home" color={color} size={size} />
                }} />
            <Tab.Screen name="Students" component={StudentScreen}
                options={{
                    tabBarIcon: ({ color, size }) =>
                    <FontAwesome name="graduation-cap" color={color} size={size} />
                }} />
            <Tab.Screen name="Trainers" component={TrainerScreen}
                options={{
                    tabBarIcon: ({ color, size }) =>
                    <FontAwesome5 name="chalkboard-teacher" color={color} size={size} />
                }} />
        </Tab.Navigator>
    )
}