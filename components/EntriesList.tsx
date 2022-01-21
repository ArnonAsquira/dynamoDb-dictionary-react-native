import { ScrollView, View } from "react-native";
import EntryDisplay from "./EntryDisplay";

interface EntriesListProps {
  entries: IENtryItem[];
}

const EntriesList = ({ entries }: EntriesListProps) => {
  return (
    <ScrollView>
      {entries.map((entry) => (
        <EntryDisplay entry={entry} />
      ))}
    </ScrollView>
  );
};

export default EntriesList;
