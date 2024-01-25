import {
  View,
  Pressable,
  Image,
  Text,
  TextInput,
  ImageBackground,
} from "react-native";
import johnDoe from "../../../assets/john_doe.jpeg";
import bell from "../../../assets/mingcute_notification-fillbell.png";
import popup from "../../../assets/Vectorpopup.png";
import lock from "../../../assets/Vectorlock.png";
import mail from "../../../assets/Vectormail.png";
import { Switch } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";
import bg from "../../../assets/bg.png";

export default Page = () => {
  //pour la switch juste faire d'autres useState hook et remplacer les "IsEnable et setEnable" sur chaques switch; Trop la fleme de faire ca moi meme
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);
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
              width: 74,
              height: 74,
              borderRadius: 60,
            }}
          />
        </View>
        <Text
          style={{
            color: "#2199B4",
            fontSize: 22,
            fontWeight: 500,
            flex: 0.1,
          }}
        >
          Parametre de Notifications
        </Text>
        <View style={styles.main}>
          <View
            style={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              height: "70%",
              marginBottom: "50%",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Image source={mail} />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Notification par Mail
              </Text>
              <Switch
                trackColor={{ false: "#D9D9D9", true: "#5FB6DB" }}
                thumbColor={isEnabled ? "#D9D9D9" : "#5FB6DB"}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Image source={popup} />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Pop up notification
              </Text>
              <Switch
                trackColor={{ false: "#D9D9D9", true: "#5FB6DB" }}
                thumbColor={isEnabled1 ? "#D9D9D9" : "#5FB6DB"}
                onValueChange={toggleSwitch1}
                value={isEnabled1}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Image source={bell} />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Display on status bar
              </Text>
              <Switch
                trackColor={{ false: "#D9D9D9", true: "#5FB6DB" }}
                thumbColor={isEnabled2 ? "#D9D9D9" : "#5FB6DB"}
                onValueChange={toggleSwitch2}
                value={isEnabled2}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Image source={lock} />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Display on lock screen
              </Text>
              <Switch
                trackColor={{ false: "#D9D9D9", true: "#5FB6DB" }}
                thumbColor={isEnabled3 ? "#D9D9D9" : "#5FB6DB"}
                onValueChange={toggleSwitch3}
                value={isEnabled3}
              />
            </View>
          </View>
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
    flex: 0.2,
    marginTop: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "80%",
  },
  main: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
});
