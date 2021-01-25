import React, { useState, useEffect } from "react";
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

  let resetPage = (val) => {
    onSearchSubmit(val);
    setPage(1);
  };
  useEffect(() => {
    onSearchSubmit(term);
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <View>
      <SearchBar onSubmitEditing={resetPage} />
      <View>
        <Button
          title={`Page: ${page}`}
          onPress={() => {
            setPage(page + 1);
          }}
        />
        <ImageList images={images} page={page} />
      </View>
    </View>
  );
};

export default SearchScreen;
