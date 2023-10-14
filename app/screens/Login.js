import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import app from "./../../assets/images/app.png";
import Colors from "../shared/Colors";
import SignInWithOAuth from "../components/SignInWithOAuth";

const Login = () => {
  return (
    <View style={{ alignItems: "center", backgroundColor: Colors.LIGHT_GRAY }}>
      <Image source={app} style={styles.appImage} />
      <View style={styles.wrapper}>
        <Text style={styles.heading}>Your Ultimate Doctor</Text>
        <Text style={styles.heading}>Appointment Booking App</Text>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Book appointments effortlessly and manage your health journey
        </Text>
        <SignInWithOAuth />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appImage: {
    width: 250,
    height: 500,
    objectFit: "cover",
    marginTop: 40,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#000",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
  wrapper: {
    backgroundColor: Colors.WHITE,
    padding: 25,
    alignItems: "center",
    marginTop: -30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
export default Login;
