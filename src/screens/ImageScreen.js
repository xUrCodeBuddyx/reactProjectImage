import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Dimensions } from "react-native";

const ImageScreen = ({ route, navigation }) => {
  const { image } = route.params;
  console.log(image)
  navigation.setOptions({ title: image.alt_description });
  return (
    <View>
      <Image
        style={{
          height: Math.round(Dimensions.get("window").height),
          resizeMode: "contain"
        }}
        source={{ uri: image.urls.full }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default ImageScreen;
