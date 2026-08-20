import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function ProductCard({
  image,
  name,
  price,
  rating,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image
        source={image}
        style={styles.productImage}
        resizeMode="cover"
      />

      <View style={styles.infoContainer}>
        <Text
          style={styles.productName}
          numberOfLines={1}
        >
          {name}
        </Text>

        <Text style={styles.price}>
          {price}
        </Text>

        <Text style={styles.rating}>
          ⭐ {rating}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
  },

  productImage: {
    width: "100%",
    height: 170,
    backgroundColor: "#F5F5F5",
  },

  infoContainer: {
    padding: 12,
  },

  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111111",
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111111",
    marginTop: 6,
  },

  rating: {
    fontSize: 13,
    color: "#555555",
    marginTop: 5,
  },
});