import { StyleSheet, View, Image, Pressable } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

export default function Nav() {
  const { voornaam, tussenvoegsel, achternaam } =
    useLocalSearchParams();

  const params = {
    voornaam,
    tussenvoegsel,
    achternaam,
  };

  return (
    <View style={styles.navbar}>

      <Link
        href={{
          pathname: "/Home",
          params,
        }}
        asChild
      >
        <Pressable style={styles.iconWrapper}>
          <Image
            source={require("./Images/homeic.png")}
            style={styles.icon}
          />
        </Pressable>
      </Link>



  <Link
        href={{
          pathname: "/Bestellingen",
          params,
        }}
        asChild
      >
        <Pressable style={styles.iconWrapper}>
          <Image
            source={require("./Images/Betselingen.png")}
            style={styles.icon}
          />
        </Pressable>
      </Link>

      
      <Link
        href={{
          pathname: "/Plus",
          params,
        }}
        asChild
      >
        <Pressable style={styles.iconWrapper}>
          <Image
            source={require("./Images/plus.png")}
            style={styles.plusicon}
          />
        </Pressable>
      </Link>

  <Link
        href={{
          pathname: "/Profile",
          params,
        }}
        asChild
      >
        <Pressable style={styles.iconWrapper}>
          <Image
            source={require("./Images/profile.png")}
            style={styles.profileicon}
          />
        </Pressable>
      </Link>


    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    backgroundColor: "#fff",

    paddingVertical: 10,

    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },

  iconWrapper: {
    width: 60,
    height: 60,

    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  profileicon: {
    width: 62,
    height: 52,
    resizeMode: "contain",
  },
  plusicon: {
    width: 62,
    height: 52,
    resizeMode: "contain",
  },
});