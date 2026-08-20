import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { useCart } from "../context/CartContext";

export default function CartScreen() {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>
          Your Cart is Empty
        </Text>

        <Text style={styles.emptyText}>
          Add some products to your cart to see them here.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.content}>

        <Text style={styles.title}>
          My Cart
        </Text>

        {cartItems.map((item) => (
          <View
            key={item.id}
            style={styles.cartItem}
          >
            <Image
              source={item.image}
              style={styles.productImage}
              resizeMode="cover"
            />

            <View style={styles.itemInfo}>

              <Text
                style={styles.productName}
                numberOfLines={1}
              >
                {item.name}
              </Text>

              <Text style={styles.price}>
                {item.price}
              </Text>

              <Text style={styles.quantity}>
                Quantity: {item.quantity}
              </Text>

              <TouchableOpacity
                onPress={() => removeFromCart(item.id)}
              >
                <Text style={styles.removeText}>
                  Remove
                </Text>
              </TouchableOpacity>

            </View>
          </View>
        ))}

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

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111111",
    marginBottom: 20,
  },

  cartItem: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 12,
    marginBottom: 15,
  },

  productImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: "#F5F5F5",
  },

  itemInfo: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },

  productName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111111",
  },

  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111111",
    marginTop: 6,
  },

  quantity: {
    fontSize: 14,
    color: "#666666",
    marginTop: 5,
  },

  removeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#D62828",
    marginTop: 8,
  },

  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "#F8F8F8",
  },

  emptyTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111111",
  },

  emptyText: {
    fontSize: 15,
    color: "#777777",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 22,
  },
});