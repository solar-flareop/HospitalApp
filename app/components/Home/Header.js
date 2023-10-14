import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) return null;

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
        }}
      >
        <View>
          <Image source={{ uri: user.imageUrl }} style={styles.userProfile} />
        </View>
        <View>
          <Text style={{ fontFamily: "appfont" }}>Hello, 👋</Text>
          <Text style={{ fontSize: 18, fontFamily: "appfont-bold" }}>
            {user.fullName}
          </Text>
        </View>
      </View>
      <View>
        <Ionicons name="notifications-outline" size={28} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userProfile: {
    height: 45,
    width: 45,
    borderRadius: 99,
  },
});
export default Header;
