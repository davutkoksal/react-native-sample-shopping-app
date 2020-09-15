import React from "react";
import { useSelector } from "react-redux";
import { FlatList } from "react-native";
import UserProductItem from "../../components/shop/UserProductItem";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MyHeaderButton } from "../../components/ui/MyHeaderButton";

const UserProductsScreen = (props) => {
  const userProducts = useSelector((state) => state.products.userProducts);
  handleEdit = () => {
    props.navigation.navigate("Edit");
  };
  return (
    <FlatList
      data={userProducts}
      renderItem={(itemData) => (
        <UserProductItem
          id={itemData.item.id}
          title={itemData.item.title}
          price={itemData.item.price}
          imageUrl={itemData.item.imageUrl}
          handleEdit={handleEdit}
        />
      )}
    />
  );
};

UserProductsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Products",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        <Item
          title="Add"
          iconName="md-create"
          onPress={() => {
            navData.navigation.navigate("Edit");
          }}
        />
      </HeaderButtons>
    ),
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

export default UserProductsScreen;
