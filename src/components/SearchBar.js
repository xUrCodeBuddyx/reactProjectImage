import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

const SearchBar = (props) => {
  const [term, setTerm] = useState();

  let onSearchSubmit = (event) => {
    props.onChange(event.target.value);
    setTerm(props.value);
  };
  return (
    <View>
      <TextInput
        style={styles.textInput}
        type="text"
        value={term}
        name="input"
        onChange={onSearchSubmit}
        placeholder="query"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    paddingLeft: 6,
    borderRadius: 10,
    fontSize: 20,
    textAlign: "center"
  },
  button: {
    marginBottom: 20
  }
});

export default SearchBar;
