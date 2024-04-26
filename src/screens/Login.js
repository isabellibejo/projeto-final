import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const credenciaisEmail = "mariaeduarda@gmail.com";
  const credenciaisPassword = "123";

  function handleSubmit() {
    setError("")
    if (!email.trim()) {
      setError("Por favor, insira um email.");
      return;
    }
    if (!password.trim()) {
      setError("Por favor, insira uma senha");
      return;
    }
    if (email !== credenciaisEmail || password !== credenciaisPassword) {
      setError("Credenciais invalidas");
      setEmail("");
      setPassword("");
      return;
    }
    navigation.navigate("TabRoutes");
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>ACESSAR CONTA</Text>
      </TouchableOpacity>
      {error && <Text style={styles.errorText}>{error}</Text>}


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginLeft: -200,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F5F5F5',
    width: '80%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    width: '80%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  toggleButton: {
    color: 'gray',
    marginTop: 20,
  },
});



export default Login;