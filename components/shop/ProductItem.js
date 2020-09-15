import React from "react";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

export default function ProductItem({
  imageUrl,
  title,
  price,
  handleViewDetail,
  handleAddToCart,
}) {
  TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp onPress={handleViewDetail} useForeground>
      <View style={styles.product}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
        <View style={styles.textContainer}>
          <Text>{title}</Text>
          <Text>${price}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button title="View Details" onPress={handleViewDetail} />
          <Button title="Add To Cart" onPress={handleAddToCart} />
        </View>
      </View>
    </TouchableCmp>
  );
}

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    height: 300,
    width: "90%",
    margin: 20,
    borderRadius: 10,
  },
  imageContainer: { borderRadius: 10, overflow: "hidden" },
  image: { height: 200, width: "100%" },
  textContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  title: {},
  price: {},
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {},
});
