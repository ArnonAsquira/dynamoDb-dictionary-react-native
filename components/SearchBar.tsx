import axios from "axios";
import { useState, Dispatch } from "react";
import { Pressable, TextInput, View, Text, StyleSheet } from "react-native";
import { baseUrl } from "../constants/general";
import main from "../styles/main";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: main.dimensions.input.width,
    height: main.dimensions.input.height,
    backgroundColor: "black",
    color: "#2ed573",
    borderRadius: 5,
  },
  searchButton: {
    height: main.dimensions.button.height,
    width: main.dimensions.button.width,
    backgroundColor: main.colors.primary,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

interface SearchBarProps {
  setEntriesList: Dispatch<React.SetStateAction<IENtryItem[]>>;
}

const SearchBar = ({ setEntriesList }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const handleSearch = async () => {
    setLoading(true);
    try {
      const { data }: { data: IENtryItem[] } = await axios.get(
        `${baseUrl}/get/${inputValue}`
      );
      if (data.length < 1) {
        alert("no results found");
      }
      setEntriesList(data);
    } catch (err) {
      console.log(err);
      alert("something went wrong");
    }
    setLoading(false);
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setInputValue}></TextInput>
      <Pressable style={styles.searchButton} onPress={() => handleSearch()}>
        <Text>search</Text>
      </Pressable>
      <Text>{loading ? "loading..." : null}</Text>
    </View>
  );
};

export default SearchBar;
