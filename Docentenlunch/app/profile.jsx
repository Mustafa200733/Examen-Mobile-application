import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  const { username } = useLocalSearchParams();
  const displayName = typeof username === "string" && username.trim() ? username : "Gebruiker";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welkom {displayName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111111",
    marginBottom: 12,
    textAlign: "center",
    top: -280,
  },
  subtitle: {
    fontSize: 16,
    color: "#444444",
    textAlign: "center",
  },
});
