import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.content}>

        {/* Header */}

        <Text style={styles.title}>
          Profile
        </Text>

        {/* Profile Information */}

        <View style={styles.profileCard}>

          <View style={styles.profileImageContainer}>
            <Image
              source={require("../assets/images/profile.webp")}
              style={styles.profileImage}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.name}>
            Cedric
          </Text>

          <Text style={styles.email}>
            cedric@example.com
          </Text>

        </View>

        {/* Account Section */}

        <Text style={styles.sectionTitle}>
          Account
        </Text>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>
            Personal Information
          </Text>

          <Text style={styles.arrow}>
            ›
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>
            My Orders
          </Text>

          <Text style={styles.arrow}>
            ›
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>
            Payment Methods
          </Text>

          <Text style={styles.arrow}>
            ›
          </Text>
        </TouchableOpacity>

        {/* Settings */}

        <Text style={styles.sectionTitle}>
          Settings
        </Text>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>
            Notifications
          </Text>

          <Text style={styles.arrow}>
            ›
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>
            Privacy & Security
          </Text>

          <Text style={styles.arrow}>
            ›
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>
            Help & Support
          </Text>

          <Text style={styles.arrow}>
            ›
          </Text>
        </TouchableOpacity>

        {/* Logout */}

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>
            Log Out
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

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111111",
    marginBottom: 20,
  },

  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 25,
    alignItems: "center",
  },

  profileImageContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    overflow: "hidden",
    backgroundColor: "#F1F1F1",
    alignItems: "center",
    justifyContent: "center",
  },

  profileImage: {
    width: 90,
    height: 90,
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111111",
    marginTop: 12,
  },

  email: {
    fontSize: 14,
    color: "#777777",
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111111",
    marginTop: 28,
    marginBottom: 10,
  },

  option: {
    height: 55,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  optionText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#222222",
  },

  arrow: {
    fontSize: 25,
    color: "#888888",
  },

  logoutButton: {
    height: 52,
    borderRadius: 14,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  logoutText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});