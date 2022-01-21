import { Text, View, StyleSheet } from "react-native";
import mainStyles from "../styles/main";

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainStyles.colors.backGroundGrey,
    borderRadius: 5,
    marginTop: 10,
  },
  h1: {
    fontWeight: mainStyles.text.weight.bold,
    fontSize: mainStyles.text.size.large,
  },
  pos: {
    fontSize: mainStyles.text.size.small,
  },
  definition: {
    fontSize: mainStyles.text.size.normal,
  },
});

interface EntryDisplayProps {
  entry: IENtryItem;
}

const EntryDisplay = ({ entry }: EntryDisplayProps) => {
  console.log(entry);
  return (
    <View style={styles.container}>
      <Text>{entry.word}</Text>
      <Text>{entry.speachType}</Text>
      <Text>{entry.definition}</Text>
    </View>
  );
};

export default EntryDisplay;
