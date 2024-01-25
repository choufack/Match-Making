import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const firebaseConfig = {
  // Votre configuration Firebase ici
  apiKey: "AIzaSyDygKzq02T8ZStWsmvlWEqMrj_ciskFYMw",
  authDomain: "ppefirebase.firebaseapp.com",
  projectId: "ppefirebase",
  storageBucket: "ppefirebase.appspot.com",
  messagingSenderId: "800568494544",
  appId: "1:800568494544:web:2bff053b1c05ac99c251d5",
  measurementId: "G-LR7YY8221J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const login = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((success) => {
        alert("Connexion réussie");
        navigation.navigate('App2'); // Remplacez 'Home' par le nom de votre écran de destination
      })
      .catch((err) => {
        alert("Erreur de connexion: " + err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
       <Button
        title="Go to Edit Profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <Button title="Se connecter" onPress={login} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '30%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default Login;
