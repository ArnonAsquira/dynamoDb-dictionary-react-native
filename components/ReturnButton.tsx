import { Image, Text, View } from "react-native";
import { Link } from "react-router-native";

const ReturnButton = () => {
  return (
    <View style={{ marginTop: 5, alignSelf: "flex-start" }}>
      <Link to="/">
        <Image
          style={{
            width: 50,
            height: 50,
          }}
          source={{
            uri: "https://img.icons8.com/ios/50/000000/delete-sign--v2.png",
          }}
        />
      </Link>
    </View>
  );
};

export default ReturnButton;
