EmployerDashboardScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function EmployerDashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Employer Dashboard</Text>
      <Button
        title="View Candidates"
        onPress={() => navigation.navigate('JobSearch')}
      />
      <Button
        title="View Applications"
        onPress={() => navigation.navigate('Analytics')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
