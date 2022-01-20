import { useState } from "react";
import { Pressable, TextInput, View, Text } from "react-native";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState<string | undefined>();
  const handleSearch = () => {
    console.log(inputValue);
  };
  return (
    <View>
      <TextInput
        style={{
          width: 200,
          height: 50,
          backgroundColor: "black",
          color: "white",
        }}
        onChangeText={setInputValue}
      ></TextInput>
      <Pressable onPress={() => handleSearch()}>
        <Text>search</Text>
      </Pressable>
    </View>
  );
};

export default SearchBar;
