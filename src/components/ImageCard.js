import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const ImageCard = (props) => {
  const { urls } = props.image;
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            image: props.image
          })
        }
      >
        <Image
          style={{
            height: 500
          }}
          source={{ uri: urls.regular }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ImageCard;
