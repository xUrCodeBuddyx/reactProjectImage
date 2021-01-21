import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./screens/SearchScreen";
import { NavigationContainer } from "@react-navigation/native";
import ImageScreen from "./screens/ImageScreen";
import { StyleSheet, View, Image } from "react-native";
import React from "react";
const Stack = createStackNavigator();

const MyCustomHeaderBackImage = () => (
  <Image
    source={{ uri: "https://image.flaticon.com/icons/png/512/93/93634.png" }}
    style={{ width: 22, height: 22, tintColor: "#fff" }}
  />
);

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{ headerBackImage: MyCustomHeaderBackImage }}
        defaultNavigationOptions={{ title: "search" }}
      >
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Photo Searcher" }}
        />
        <Stack.Screen
          name="Details"
          component={ImageScreen}
          options={{
            title: "photo detail",

            headerStyle: {
              backgroundColor: "#f4511e"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              textTransform: "capitalize",
              fontSize: 15,
              marginLeft: -30
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
