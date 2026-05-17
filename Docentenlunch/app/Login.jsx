import { useState } from "react";
import {ImageBackground, Pressable, StyleSheet, Text, TextInput, View,
} from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  const [voornaam, setVoornaam] = useState("");
  const [tussenvoegsel, setTussenvoegsel] = useState("");
  const [achternaam, setAchternaam] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    router.replace({
      pathname: "/Home",
      params: {
        voornaam,
        tussenvoegsel,
        achternaam,
      },
    });
  };

  return (
    <ImageBackground
      source={require("./log.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.form}>
<Text style={styles.Login}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Voornaam"
          value={voornaam}
          onChangeText={setVoornaam}
        />

        <TextInput
          style={styles.input}
          placeholder="Tussenvoegsel"
          value={tussenvoegsel}
          onChangeText={setTussenvoegsel}
        />

        <TextInput
          style={styles.input}
          placeholder="Achternaam"
          value={achternaam}
          onChangeText={setAchternaam}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

Login: {
    fontSize: 40,
    fontWeight: "700",
    color: "#1565C0",
 top: -300,
 left: 125,    
  },

  form: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 12,
  },

  input: {
    height: 54,
    borderRadius: 28,
    paddingHorizontal: 16,
    backgroundColor: "#F5F7FA",
    borderWidth: 1,
    borderColor: "#D6E4F0",
    fontSize: 16,
  },

  button: {
    height: 54,
    borderRadius: 30,
    backgroundColor: "#1565C0",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});