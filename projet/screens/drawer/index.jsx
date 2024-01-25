import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import johnDoe from "../../assets/john_doe.jpeg";
import profile1 from "../../assets/profile.png";
import cloc from "../../assets/cloc.png";
import heart from "../../assets/heart.png";
import setting from "../../assets/setting.png";
import logout from "../../assets/logout.png";


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={johnDoe}
          style={styles.profilePhoto}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={{ color: "grey" }}>john.doe@gmail.com</Text>
      </View>
      <View style={[styles.NavButtons, { flex: 0.8 }]}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            flex: 0.6,
          }}
        >
          <Pressable
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
            }}
            onPress={() => router.push("/drawer/edit-profile")}
          >
            <View
              style={{
                backgroundColor: "red",
                borderRadius: 60,
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
                marginBottom: 10,
                marginRight: 30,
              }}
            >
              <Image
                source={profile1}
                style={{ width: 25, height: 25 }}
              />
            </View>
            <Text style={styles.button_name}>Edit profile</Text>
          </Pressable>
          <Pressable
            onPress={() => router.push("/drawer/application/")}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <View
              style={{
                backgroundColor: "pink",
                borderRadius: 60,
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
                marginBottom: 10,
                marginRight: 30,
              }}
            >
              <Image
                source={cloc}
                style={{ width: 25, height: 25 }}
              />
            </View>
            <Text style={styles.button_name}>Application (8)</Text>
          </Pressable>

          <Pressable
            onPress={() => router.push("/drawer/notifications/")}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <View
              style={{
                backgroundColor: "turquoise",
                borderRadius: 60,
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
                marginBottom: 10,
                marginRight: 30,
              }}
            >
              <Image
                source={setting}
                style={{ width: 25, height: 25 }}
              />
            </View>
            <Text style={styles.button_name}>Notifications Setting</Text>
          </Pressable>

          <Pressable
            onPress={() => router.push("/drawer/share-app")}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <View
              style={{
                backgroundColor: "fuchsia",
                borderRadius: 60,
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
                marginBottom: 10,
                marginRight: 30,
              }}
            >
              <Image
                source={heart}
                style={{ width: 25, height: 25 }}
              />
            </View>
            <Text style={styles.button_name}>Share App</Text>
          </Pressable>
        </View>
        <View style={[styles.NavButtons, { flex: 0.2 }]}>
          <Pressable
            onPress={() => router.push("/drawer/login-screen")}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <View
              style={{
                backgroundColor: "red",
                borderRadius: 60,
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
                marginBottom: 10,
                marginRight: 30,
              }}
            >
              <Image
                source={logout}
                style={{ width: 35, height: 20 }}
              />
            </View>
            <Text style={styles.button_name}>Logout</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    flex: 0.3,
    marginTop: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "80%",
  },
  NavButtons: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "80%",
  },
  profilePhoto: {
    width: 84,
    height: 84,
    borderRadius: 60,
  },
  profileName: {
    fontSize: 30,
    fontWeight: "600",
  },
  button_name: {
    fontWeight: "500",
  },
});
