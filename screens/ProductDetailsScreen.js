import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { useCart } from "../context/CartContext";

export default function ProductDetailsScreen({ route }) {
  const { product } = route.params;

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity((currentQuantity) => currentQuantity + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    setQuantity((currentQuantity) => {
      if (currentQuantity > 1) {
        return currentQuantity - 1;
      }

      return 1;
    });
  };

  // Add product to cart
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Product Image */}

      <Image
        source={product.image}
        style={styles.productImage}
        resizeMode="cover"
      />

      <View style={styles.content}>

        {/* Product Name */}

        <Text style={styles.productName}>
          {product.name}
        </Text>

        {/* Rating */}

        <Text style={styles.rating}>
          ⭐ {product.rating}
        </Text>

        {/* Price */}

        <Text style={styles.price}>
          {product.price}
        </Text>

        {/* Product Description */}

        <Text style={styles.sectionTitle}>
          Product Details
        </Text>

        <Text style={styles.description}>
          This high-quality product combines style,
          comfort, and functionality. It is carefully
          selected to provide excellent value and a
          great shopping experience.
        </Text>

        {/* Quantity */}

        <Text style={styles.quantityTitle}>
          Quantity
        </Text>

        <View style={styles.quantityContainer}>

          {/* Decrease */}

          <TouchableOpacity
            style={styles.quantityButton}
            onPress={decreaseQuantity}
          >
            <Text style={styles.quantityButtonText}>
              −
            </Text>
          </TouchableOpacity>

          {/* Current Quantity */}

          <Text style={styles.quantity}>
            {quantity}
          </Text>

          {/* Increase */}

          <TouchableOpacity
            style={styles.quantityButton}
            onPress={increaseQuantity}
          >
            <Text style={styles.quantityButtonText}>
              +
            </Text>
          </TouchableOpacity>

        </View>

        {/* Add To Cart */}

        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}
          activeOpacity={0.8}
        >
          <Text style={styles.addToCartText}>
            Add to Cart
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },

  productImage: {
    width: "100%",
    height: 350,
    backgroundColor: "#FFFFFF",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  productName: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111111",
  },

  rating: {
    fontSize: 14,
    color: "#555555",
    marginTop: 8,
  },

  price: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111111",
    marginTop: 12,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "700",
    color: "#111111",
    marginTop: 25,
    marginBottom: 8,
  },

  description: {
    fontSize: 15,
    lineHeight: 23,
    color: "#666666",
  },

  quantityTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111111",
    marginTop: 25,
    marginBottom: 12,
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  quantityButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#DDDDDD",
  },

  quantityButtonText: {
    fontSize: 24,
    fontWeight: "500",
    color: "#111111",
  },

  quantity: {
    fontSize: 20,
    fontWeight: "700",
    marginHorizontal: 22,
    color: "#111111",
  },

  addToCartButton: {
    height: 55,
    borderRadius: 14,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  addToCartText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },
});