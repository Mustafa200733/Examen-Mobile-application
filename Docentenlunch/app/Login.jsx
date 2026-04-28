
import { useEffect, useMemo, useRef, useState } from "react";
import { ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const errorTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (errorTimerRef.current) clearTimeout(errorTimerRef.current);
    };
  }, []);

  const isValid = useMemo(() => {
    return username.trim().length > 0 && password.length > 0;
  }, [username, password]);

  const handleLogin = async () => {
    const showMessage = (message) => {
      setError(message);
      if (errorTimerRef.current) clearTimeout(errorTimerRef.current);
      errorTimerRef.current = setTimeout(() => setError(""), 3000);
    };

    if (!isValid) {
      showMessage("Vul je gebruikersnaam en wachtwoord in.");
      return;
    }

    setError("");
    router.replace({
      pathname: "/profile",
      params: { username: username.trim() },
    });
  };

  return (
    <ImageBackground
      source={require("./log.png")}
      style={[styles.background, styles.container]}
      resizeMode="cover"
    >
      <View style={styles.form}>

        <TextInput
          style={styles.input}
          placeholder="Gebruikersnaam"
          placeholderTextColor="#9E9E9E"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="username"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#9E9E9E"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          textContentType="password"
        />

        <Pressable
          style={[styles.button, !isValid && styles.buttonDisabled]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    width: "100%",
    height: "100%",
    flex: 1,
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
    color: "#212121",
    backgroundColor: "#F5F7FA",
    borderWidth: 1,
    borderColor: "#D6E4F0",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.5,
  },

  button: {
    width: "100%",
    height: 54,
    backgroundColor: "#1565C0",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },

  buttonDisabled: {
    backgroundColor: "#90CAF9",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1,
  },

  errorText: {
    color: "#D32F2F",
    fontSize: 13,
    fontWeight: "600",
    marginTop: 4,
  },
});

