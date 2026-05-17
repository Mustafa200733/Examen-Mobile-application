import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Nav from "./Nav";
export default function Profile() {

  const { voornaam, tussenvoegsel, achternaam } =
    useLocalSearchParams();

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Profiel</Text>

      <View style={styles.box}>

        <View style={styles.row}>
          <Text style={styles.label}>Voornaam</Text>
          <Text style={styles.value}>{voornaam}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Tussenvoegsel</Text>
          <Text style={styles.value}>
            {tussenvoegsel || "-"}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Achternaam</Text>
          <Text style={styles.value}>{achternaam}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Rol</Text>
          <Text style={styles.value}>Docent</Text>
        </View>
      </View>
    <Nav />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 30,
  },

  box: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 25,
    width: "100%",
    height: 320,

    borderWidth: 1,
    borderColor: "#ddd",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 5,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },

  label: {
    fontSize: 17,
    color: "#666",
  },

  value: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111",
  },

});