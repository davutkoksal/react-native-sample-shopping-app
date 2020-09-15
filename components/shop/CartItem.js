import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export const CartItem = (props) => {
  const { quantity, productPrice, productTitle, sum, productId } = props.list;
  return (
    <View>
      <View style={styles.item}>
        <Text>{productId}</Text>
        <Text>{quantity}</Text>
        <Text>{productTitle}</Text>
        <Text>{productPrice}</Text>
        <Text>{sum.toFixed(2)}</Text>
        <TouchableOpacity onPress={props.removeItem}>
          <Ionicons name="md-trash" size={23} />
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
