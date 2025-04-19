import 'react-native-gesture-handler';  
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Button } from 'react-native';
import CVRegistrationScreen from './screens/CVRegistrationScreen';
import ProfileCreationScreen from './screens/ProfileCreationScreen';
import JobSearchScreen from './screens/JobSearchScreen';
import JobApplicationScreen from './screens/JobApplicationScreen';
import EmployerDashboardScreen from './screens/EmployerDashboardScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';

// Create Stack Navigator and Tab Navigator
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Screens
function CVRegistrationScreen({ navigation }) {
  return (
    <View>
      <Text>CV Registration</Text>
      <Button
        title="Go to Profile Creation"
        onPress={() => navigation.navigate('ProfileCreation')}
      />
    </View>
  );
}

function ProfileCreationScreen({ navigation }) {
  return (
    <View>
      <Text>Create Profile</Text>
      <Button
        title="Go to Job Search"
        onPress={() => navigation.navigate('JobSearch')}
      />
    </View>
  );
}

function JobSearchScreen({ navigation }) {
  return (
    <View>
      <Text>Job Search</Text>
      <Button
        title="Go to Job Application"
        onPress={() => navigation.navigate('JobApplication')}
      />
    </View>
  );
}

function JobApplicationScreen({ navigation }) {
  return (
    <View>
      <Text>Job Application</Text>
      <Button
        title="Go to Employer Dashboard"
        onPress={() => navigation.navigate('EmployerDashboard')}
      />
    </View>
  );
}

function EmployerDashboardScreen({ navigation }) {
  return (
    <View>
      <Text>Employer Dashboard</Text>
      <Button
        title="Go to Analytics"
        onPress={() => navigation.navigate('Analytics')}
      />
    </View>
  );
}

function AnalyticsScreen({ navigation }) {
  return (
    <View>
      <Text>Analytics & Reports</Text>
    </View>
  );
}

// Tab Navigator for main sections (CV Registration, Job Search, Analytics)
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="CVRegistration"
        component={CVRegistrationScreen}
        options={{ tabBarLabel: 'CV Registration' }}
      />
      <Tab.Screen
        name="JobSearch"
        component={JobSearchScreen}
        options={{ tabBarLabel: 'Job Search' }}
      />
      <Tab.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={{ tabBarLabel: 'Analytics' }}
      />
    </Tab.Navigator>
  );
}

// Stack Navigator that controls the navigation flow
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigator">
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }} // Hide the header for TabNavigator
        />
        <Stack.Screen
          name="ProfileCreation"
          component={ProfileCreationScreen}
          options={{ title: 'Create Profile' }}
        />
        <Stack.Screen
          name="JobApplication"
          component={JobApplicationScreen}
          options={{ title: 'Job Application' }}
        />
        <Stack.Screen
          name="EmployerDashboard"
          component={EmployerDashboardScreen}
          options={{ title: 'Employer Dashboard' }}
        />
        <Stack.Screen
          name="Analytics"
          component={AnalyticsScreen}
          options={{ title: 'Analytics & Reports' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
