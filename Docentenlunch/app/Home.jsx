import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Nav from "./Nav";

export default function Home() {

  const { voornaam, tussenvoegsel, achternaam } =
    useLocalSearchParams();

  const displayName =
    typeof voornaam === "string" && voornaam.trim()
      ? voornaam
      : "Gebruiker";

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Welkom {displayName} 👋
      </Text>
                  <Nav />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    top: -300,
  },
});