
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
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

const SignUp = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const signup = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((success) => {
        alert("Inscription réussie");
        navigation.navigate('App2'); // Remplacez 'App2' par le nom de votre écran de destination
      })
      .catch((err) => {
        alert("Erreur d'inscription: " + err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        value={firstname}
        onChangeText={(text) => setFirstname(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={lastname}
        onChangeText={(text) => setLastname(text)}
      />
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
      <Button title="S'inscrire" onPress={signup} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {/* Ajout du lien vers la page de connexion */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Vous avez déjà un compte ? Connectez-vous ici.</Text>
      </TouchableOpacity>
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
  linkText: {
    marginTop: 20,
    color: 'blue',
  },
});

export default SignUp;
