import {
  View,
  Pressable,
  Image,
  Text,
  TextInput,
  ImageBackground,
} from "react-native";
import johnDoe from "../../../assets/john_doe.jpeg";
import { StyleSheet } from "react-native";
import { useState } from "react";
import bg from "../../../assets/bg.png";

export default Page = () => {
  const [NameInput, onChangeNameInput] = useState("");
  const [EmailInput, onChangeEmailInput] = useState("");
  const [PasswordInput, onChangePasswordInput] = useState("");
  return (
    <ImageBackground
      source={bg}
      resizeMode="cover"
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <View style={[styles.container]}>
        <View style={styles.profile}>
          <Image
            source={johnDoe}
            style={{
              width: 84,
              height: 84,
              borderRadius: 60,
            }}
          />
          <Text
            style={{
              fontSize: 30,
              fontWeight: "600",
            }}
          >
            John Doe
          </Text>
          <Text style={{ color: "grey" }}>Edit profile</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.InputContainer}>
            <Text style={styles.InputTitle}>Name</Text>
            <TextInput
              textAlign={"center"}
              placeholderTextColor={"gray"}
              placeholder="Your Name here !"
              style={styles.TextInputs}
              onChangeText={onChangeNameInput}
              value={NameInput}
            />
          </View>
          <View style={styles.InputContainer}>
            <Text style={styles.InputTitle}>Your Email</Text>
            <TextInput
              textAlign={"center"}
              placeholderTextColor={"gray"}
              placeholder="Your Email here !"
              style={styles.TextInputs}
              onChangeText={onChangeEmailInput}
              value={EmailInput}
            />
          </View>
          <View style={styles.InputContainer}>
            <Text style={styles.InputTitle}>Password</Text>
            <TextInput
              textAlign={"center"}
              placeholderTextColor={"gray"}
              placeholder="Your Password here !"
              style={styles.TextInputs}
              onChangeText={onChangePasswordInput}
              value={PasswordInput}
            />
          </View>
          <Pressable
            style={{
              backgroundColor: "#5FB6DB",
              justifyContent: "center",
              alignItems: "center",
              height: "15%",
              width: "100%",
              marginBottom: "20%",
              marginTop: "15%",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                color: "#fff",
              }}
            >
              Save Now
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    flex: 0.3,
    marginTop: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  main: {
    flex: 0.7,
    alignItems: "flex-start",
    justifyContent: "center",
    width: "80%",
  },
  InputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    height: "25%",
  },
  InputTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "gray",
  },
  TextInputs: {
    height: "50%",
    width: "100%",
    borderColor: "#5FB6DB",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    fontWeight: 600,
    alignContent: "center",
  },
});
