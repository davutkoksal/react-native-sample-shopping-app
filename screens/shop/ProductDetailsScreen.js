import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Text,
  ScrollView,
  Image,
  Button,
  StyleSheet,
  View,
} from "react-native";
import { addToCart } from "../../store/actions/CartActions";

export default function ProductDetailsScreen(props) {
  const productId = props.navigation.getParam("productId");
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((product) => product.id === productId)
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.btnContainer}>
        <Button
          title="Add to Cart"
          onPress={() => {
            dispatch(addToCart(selectedProduct));
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{selectedProduct.price}</Text>
        <Text style={styles.description}>{selectedProduct.description}</Text>
      </View>
    </ScrollView>
  );
}

ProductDetailsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
  };
};

const styles = StyleSheet.create({
  product: {
    backgroundColor: "white",
    height: 300,
    width: "90%",
    margin: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  imageContainer: { borderRadius: 10, overflow: "hidden", width: "90%" },
  image: { height: 200, width: "100%" },
  textContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  description: { fontFamily: "open-sans-bold", fontSize: 20 },
  price: { fontFamily: "open-sans-bold", fontSize: 20 },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  btn: {},
});
