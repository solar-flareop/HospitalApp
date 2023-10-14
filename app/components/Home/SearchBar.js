import { View, Text } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../shared/Colors";

const SearchBar = ({ setSearchText }) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <View style={{ marginTop: 15 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
          borderWidth: 0.8,
          borderColor: Colors.GRAY,
          padding: 8,
          borderRadius: 8,
        }}
      >
        <Ionicons name="search-outline" size={24} color={Colors.PRIMARY} />
        <TextInput
          placeholder="Search..."
          onChangeText={(value) => setSearchInput(value)}
          onSubmitEditing={() => setSearchText(searchInput)}
          style={{ fontSize: 14, width: "100%", fontFamily: "appfont" }}
        />
      </View>
    </View>
  );
};

export default SearchBar;
