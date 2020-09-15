import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { FlatList } from "react-native-gesture-handler";
import { CartItem } from "../../components/shop/CartItem";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/actions/CartActions";
import { addOrder } from "../../store/actions/OrderActions";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MyHeaderButton } from "../../components/ui/MyHeaderButton";

export const CartScreen = (props) => {
  const total = useSelector((state) => state.cart.total);
  const itemsObj = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  let itemsArr = [];
  for (let key in itemsObj) {
    itemsArr.push({
      productId: key,
      productTitle: itemsObj[key].productTitle,
      productPrice: itemsObj[key].productPrice,
      sum: itemsObj[key].sum,
      quantity: itemsObj[key].quantity,
    });
  }

  return (
    <View>
      <View style={styles.total}>
        <Text>Total:${total.toFixed(2)}</Text>
        <Button
          title="Order Now"
          color={Colors.primary}
          onPress={() => dispatch(addOrder(itemsArr, total))}
        />
      </View>
      <View>
        <FlatList
          data={itemsArr}
          keyExtractor={(item) => item.productId}
          renderItem={(itemData) => (
            <CartItem
              list={itemData.item}
              removeItem={() => {
                dispatch(removeFromCart(itemData.item.productId));
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: "center",
  },
});

CartScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Cart",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        <Item
          title="Menu"
          iconName="md-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
