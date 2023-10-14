import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/warmUpBrowser";
import Colors from "../shared/Colors";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <TouchableOpacity style={styles.loginBtn} onPress={onPress}>
      <Text style={{ fontSize: 17, color: Colors.WHITE }}>
        Login With Google
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    padding: 16,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 90,
    alignItems: "center",
    marginTop: 20,
    width: Dimensions.get("screen").width * 0.8,
  },
});
export default SignInWithOAuth;
