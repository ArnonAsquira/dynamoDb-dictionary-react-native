import { Text, View, StyleSheet } from "react-native";
import mainStyles from "../styles/main";
import ReturnButton from "./ReturnButton";

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainStyles.colors.backGroundGrey,
    borderRadius: 5,
    marginTop: 10,
    flex: 1,
    justifyContent: "space-around",
  },
  h1: {
    marginTop: 30,
    fontWeight: mainStyles.text.weight.bold,
    fontSize: 30,
    textAlign: "center",
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  pos: {
    fontSize: mainStyles.text.size.small,
  },
  definition: {
    fontSize: mainStyles.text.size.normal,
  },
});

interface EntryDisplayProps {
  entry: IENtryItem | null;
}

const EntryDisplay = ({ entry }: EntryDisplayProps) => {
  console.log(entry);
  if (entry === null) return <View></View>;
  return (
    <View style={styles.container}>
      <ReturnButton />
      <Text style={styles.h1}>{entry.word}</Text>
      <Text style={styles.pos}>{entry.speachType}</Text>
      <Text style={styles.definition}>{entry.definition}</Text>
    </View>
  );
};

export default EntryDisplay;
