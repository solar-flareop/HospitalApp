import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import Login from "./app/screens/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Navigation from "./app/navigation/Navigation";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    appfont: require("./assets/fonts/Outfit-Regular.ttf"),
    " appfont-bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "appfont-semibold": require("./assets/fonts/Outfit-SemiBold.ttf"),
    "appfont-light": require("./assets/fonts/Outfit-Light.ttf"),
  });
  if (!fontsLoaded) return null;

  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <Navigation />
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
