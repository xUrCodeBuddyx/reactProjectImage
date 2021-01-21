import React from "react";
import ImageCard from "./ImageCard";
import { View, StyleSheet, FlatList } from "react-native";
import { Dimensions } from "react-native";
class ImageList extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          contentContainerStyle={{
            flex: 1
          }}
          style={styles.imageList}
          data={this.props.images}
          renderItem={({ item }) => <ImageCard id={item.id} image={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageList: {
    height: Math.round(Dimensions.get("window").height)
  }
});

export default ImageList;
