import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";



const Profile = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.head}>
          <Ionicons name="md-person-circle" size={30} color="black" />
          <Ionicons name="notifications" size={30} color="black" />
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text>SignUp</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
  paddingHorizontal: 16,
  },
  head: {
   justifyContent: "space-between",
   flexDirection: "row",
   paddingVertical: 16
  }
});
