import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import unsplash from "../api/unsplash";
import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";
const SearchScreen = () => {
  const [term, setTerm] = useState();
  const [images, setImages] = useState([]);

  let onSearchSubmit = async (value) => {
    const response = await unsplash.get("/search/photos/", {
      params: { query: value, per_page: 21 }
    });
    setImages(response.data.results);
  };

  return (
    <View>
      <SearchBar value={term} onChange={onSearchSubmit} />
      <View>
        <ImageList images={images} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});

export default SearchScreen;
