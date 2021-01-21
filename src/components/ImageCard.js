import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ImageCard = (props) => {
  const [loaded, setLoaded] = useState(false);
  const { urls } = props.image;
  const navigation = useNavigation();
  const loadingStyle = () => {
    if (loaded === false) {
      return {
        display: "block",
        background: "grey",
        height: "500px"
      };
    } else return { display: "none" };
  };

  const NotLoadingStyle = () => {
    if (loaded === true) {
      return {
        display: "block",
        height: 500
      };
    } else return { display: "none" };
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            image: props.image
          })
        }
      >
        <Text style={loadingStyle()}>loading</Text>
        <Image
          style={NotLoadingStyle()}
          source={{ uri: urls.regular }}
          onLoad={() => setLoaded(true)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ImageCard;
