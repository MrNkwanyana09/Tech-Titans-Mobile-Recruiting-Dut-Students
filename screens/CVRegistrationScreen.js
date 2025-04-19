import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CVRegistrationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>CV Registration</Text>
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Phone Number" />
      <TextInput style={styles.input} placeholder="Education" />
      <Button
        title="Submit CV"
        onPress={() => navigation.navigate('ProfileCreation')}
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
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
});
