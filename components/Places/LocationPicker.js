import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OutlinedButton from "../UI/OutlinedButton";

const LocationPicker = () => {
  return (
    <View>
      <View></View>
      <View>
        <OutlinedButton icon="location"> Locate User</OutlinedButton>
        <OutlinedButton icon="map">Pick on Map</OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({});
