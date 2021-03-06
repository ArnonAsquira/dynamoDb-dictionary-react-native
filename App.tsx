import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import EntriesList from "./components/EntriesList";
import SearchBar from "./components/SearchBar";
import main from "./styles/main";
import { NativeRouter, Route } from "react-router-native";
import EntryDisplay from "./components/EntryDisplay";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
  },
  header: {
    fontWeight: main.text.weight.bold,
    marginBottom: 30,
  },
});

export default function App() {
  const [entriesList, setEntriesList] = useState<IENtryItem[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<IENtryItem | null>(null);
  console.log(selectedEntry);
  return (
    <NativeRouter>
      <Route
        exact={true}
        path="/"
        render={() => (
          <View style={styles.container}>
            <Text style={styles.header}>The English Dictionary</Text>
            <SearchBar setEntriesList={setEntriesList} />
            <EntriesList
              entries={entriesList}
              setSelectedEntry={setSelectedEntry}
            />
          </View>
        )}
      />
      <Route
        path="/entry"
        render={() => <EntryDisplay entry={selectedEntry} />}
      />
    </NativeRouter>
  );
}
