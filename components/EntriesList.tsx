import { ScrollView, Text, StyleSheet, Pressable } from "react-native";
import { Dispatch } from "react";
import main from "../styles/main";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  wordOption: {
    backgroundColor: main.colors.backGroundOrange,
    borderRadius: 5,
    marginTop: 20,
    width: 300,
    height: 50,
    textAlign: "center",
  },
});

interface EntriesListProps {
  entries: IENtryItem[];
  setSelectedEntry: Dispatch<React.SetStateAction<IENtryItem | null>>;
}

const EntriesList = ({ entries, setSelectedEntry }: EntriesListProps) => {
  return (
    <ScrollView>
      {entries.map((entry, i) => (
        <Pressable key={i}>
          <Link to="/entry" onPress={() => setSelectedEntry(entry)}>
            <Text style={styles.wordOption}>
              {entry.word} {entry.speachType}
            </Text>
          </Link>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default EntriesList;
