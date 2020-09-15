import React from "react";
import { View, Image, Text, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { deleteUserProduct } from "../../store/actions/ProductActions";

export default function UserProductItem(props) {
  const { id, imageUrl, title, price, handleEdit } = props;
  const dispatch = useDispatch();
  return (
    <View style={styles.product}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>
      <View style={styles.textContainer}>
        <Text>{title}</Text>
        <Text>${price}</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button title="Edit" onPress={handleEdit} />
        <Button
          title="Delete"
          onPress={() => {
            dispatch(deleteUserProduct(id));
          }}
        />
      </View>
    </View>
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
    marginHorizontal: 20,
    marginBottom: 20,
  },
  btn: {},
});
