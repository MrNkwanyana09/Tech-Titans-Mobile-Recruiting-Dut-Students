import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ProfileCreationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Profile</Text>
      <TextInput style={styles.input} placeholder="Experience" />
      <TextInput style={styles.input} placeholder="Skills" />
      <TextInput style={styles.input} placeholder="Portfolio URL" />
      <Button
        title="Save Profile"
        onPress={() => navigation.navigate('JobSearch')}
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
