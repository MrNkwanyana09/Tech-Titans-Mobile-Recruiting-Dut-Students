import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function JobApplicationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Job Application</Text>
      <Text>Apply for your chosen job here.</Text>
      <Button
        title="Submit Application"
        onPress={() => navigation.navigate('EmployerDashboard')}
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
