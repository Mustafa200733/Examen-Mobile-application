import { Link } from 'expo-router';
import {ImageBackground, Pressable, StyleSheet, Text, View,} from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={require("./home.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.content}>
        <Text style={styles.title}>
          Click the button to Login
        </Text>
        <View style={styles.buttonContainer}>
          
         
          <Link href={"./Login"}>

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </Pressable>
          </Link > 
        </View>
      

    </View>
           

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 14,
    paddingBottom: 30,
  },
  title: {
    fontSize: 52,
    lineHeight: 56,
    fontWeight: "700",
    color: "#fff",
    textAlign: "left",
    marginBottom: 130,
        letterSpacing: 5,

  },
  buttonContainer: {
    marginBottom: 28,
  },

  button: {
    width: "100%",
    height: 45,
    backgroundColor: "#468dd4",
    borderRadius: 12,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",

  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1,
    
  },
});
