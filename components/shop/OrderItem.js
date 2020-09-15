import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import moment from "moment";
import { CartItem } from "./CartItem";

export const OrderItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.order}>
        <Text>{props.list.amount} </Text>
        <Text>{moment(props.list.date).format("MMMM Do YYYY, hh:mm")}</Text>
      </View>
      <View style={styles.btn}>
        <Button
          title={showDetails ? "Hide Details" : "Show Details"}
          onPress={() => setShowDetails((prevSt) => !prevSt)}
        />
      </View>
      {showDetails &&
        props.list.items.map((item) => (
          <CartItem key={item.productId} list={item} />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",

    width: "90%",
    margin: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  order: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    marginVertical: 10,
    alignItems: "center",
  },
});
