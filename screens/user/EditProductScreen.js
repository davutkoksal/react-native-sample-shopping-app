import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/actions/ProductActions";

export default function EditProductScreen() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  return (
    <View>
      <View>
        <Text>Title</Text>
        <TextInput
          name="title"
          onChangeText={(text) => {
            setTitle(text);
          }}
          value={title}
        ></TextInput>
      </View>
      <View>
        <Text>Image</Text>
        <TextInput
          name="image"
          onChangeText={(text) => {
            setImage(text);
          }}
          value={image}
        ></TextInput>
      </View>
      <View>
        <Text>Price</Text>
        <TextInput
          name="price"
          onChangeText={(text) => {
            setPrice(text);
          }}
          value={price}
        ></TextInput>
      </View>
      <View>
        <Text>Description</Text>
        <TextInput
          name="description"
          onChangeText={(text) => {
            setDescription(text);
          }}
          value={description}
        ></TextInput>
      </View>
      <Button
        onPress={() =>
          dispatch(
            addProduct({
              title: title,
              image: image,
              description: description,
              price: price,
            })
          )
        }
        title="Ekle"
      />
    </View>
  );
}
