import { ScrollView, Text, StyleSheet, Pressable } from "react-native";
import { Dispatch } from "react";
import main from "../styles/main";

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
        <Pressable onPress={() => setSelectedEntry(entry)}>
          <Text key={i} style={styles.wordOption}>
            {entry.word} {entry.speachType}
          </Text>
        </Pressable>
        // <EntryDisplay entry={entry} />
      ))}
    </ScrollView>
  );
};

export default EntriesList;
