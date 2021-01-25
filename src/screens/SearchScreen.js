import React, { useState } from "react";
import { View, Button } from "react-native";
import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";
import axios from "axios";

const SearchScreen = () => {
  const [term, setTerm] = useState();
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  let onSearchSubmit = async (value) => {
    setTerm(value);
    const response = await axios.get("https://pixabay.com/api/", {
      params: {
        key: "17886991-9ee3d7544c84f90d0e8126941",
        q: value,
        page: page
      }
    });

    setImages(response.data.hits);
  };

  return (
    <View>
      <SearchBar onSubmitEditing={onSearchSubmit} />
      <View>
        <Button
          title={`Page: ${page}`}
          onPress={() => {
            setPage(page + 1);
            onSearchSubmit(term);
          }}
        />
        <ImageList images={images} page={page} />
      </View>
    </View>
  );
};

export default SearchScreen;
