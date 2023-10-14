import { View, Text, Button } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import Header from "../components/Home/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/Home/SearchBar";

const Home = () => {
  const { isLoaded, signOut } = useAuth();
  return (
    <SafeAreaView style={{ marginHorizontal: 10, marginTop: 5 }}>
      {/* <Button title="Logout" onPress={() => signOut()} /> */}
      {/* <Text>Home</Text> */}
      <Header />
      <SearchBar setSearchText={(value) => console.log(value)} />
    </SafeAreaView>
  );
};

export default Home;
