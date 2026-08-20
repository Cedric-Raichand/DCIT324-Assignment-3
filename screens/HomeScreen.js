import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import ProductCard from "../components/ProductCard";

const products = [
  {
    id: "1",
    name: "Classic Sneakers",
    price: "$89.99",
    rating: 4.8,
    image: require("../assets/images/sneakers.webp"),
  },

  {
    id: "2",
    name: "Casual T-Shirt",
    price: "$39.99",
    rating: 4.6,
    image: require("../assets/images/T-Shirts.png"),
  },

  {
    id: "3",
    name: "Luxury Watch",
    price: "$149.99",
    rating: 4.9,
    image: require("../assets/images/watches.jpg"),
  },

  {
    id: "4",
    name: "Leather Handbag",
    price: "$79.99",
    rating: 4.7,
    image: require("../assets/images/handbag.jpg"),
  },

  {
    id: "5",
    name: "Wireless Headphones",
    price: "$119.99",
    rating: 4.8,
    image: require("../assets/images/headphones.jpg"),
  },

  {
    id: "6",
    name: "Denim Jacket",
    price: "$69.99",
    rating: 4.5,
    image: require("../assets/images/jackets.webp"),
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.content}>

        <Text style={styles.heading}>
          Discover
        </Text>

        <Text style={styles.subheading}>
          Find your favourite products
        </Text>

        <Text style={styles.sectionTitle}>
          Popular Products
        </Text>

        <View style={styles.productGrid}>

          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              rating={product.rating}
              onPress={() =>
                navigation.navigate(
                  "ProductDetails",
                  {
                    product: product,
                  }
                )
              }
            />
          ))}

        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },

  content: {
    padding: 20,
    paddingBottom: 30,
  },

  heading: {
    fontSize: 30,
    fontWeight: "800",
    color: "#111111",
  },

  subheading: {
    fontSize: 15,
    color: "#777777",
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: "700",
    color: "#111111",
    marginTop: 28,
    marginBottom: 16,
  },

  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});