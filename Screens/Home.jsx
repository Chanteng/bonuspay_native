import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from '@expo/vector-icons';

import icons from "../Component/icons"

const Home = () => {
  const featuresData = [
    {
      id: 1,
      icon: icons.reload,
      color: "blue",
      description: "Top Up",
    },
    {
      id: 2,
      icon: icons.send,
      color: "green",
      description: "Transfer",
    },
    {
      id: 3,
      icon: icons.internet,
      color: "primary",
      description: "Internet",
    },
    {
      id: 4,
      icon: icons.wallet,
      color: "red",
      description: "Wallet",
    },
    {
      id: 5,
      icon: icons.bill,
      color: "green",
      description: "Bill",
    },
    {
      id: 6,
      icon: icons.phone,
      color: "red",
      backgroundColor: "lightRed",
      description: "Mobile Prepaid",
    },
    
  ];



  const [features, setFeatures] = React.useState(featuresData);
  

  function renderHeader() {
    return (
      <View style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
          <Image
            source={require("../Images/LOGO1.png")}
            style={{ width: 65, height: 65 }}
          />
          <Text style={{ fontSize: 25, fontStyle: "italic" }}>Bonuspay</Text>
        </View>
        <Ionicons name="person-circle-outline" size={35} color="black" style={{ alignItems: "center", marginTop: 37 }} />
        </View>

      </View>
    );
  }

  function renderBanner() {
    return (
      <View
        style={{
          height: 200,
          borderRadius: 20,
         
        }}
      >
        <Image
          source={require("../Images/Banner.png")}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20,
          }}
        />
      </View>
    );
  }

  function renderFeatures() {
    const Header = () => (
      <View style={{ marginTop: 20, paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 25 }}>Features</Text>
      </View>
    );

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{ marginBottom: 10, width: 60, alignItems: "center" }}
        onPress={() => console.log(item.description)}
      >
        <View
          style={{
            height: 50,
            width: 50,
            marginBottom: 5,
            borderRadius: 20,
            backgroundColor: item.backgroundColor,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{
              height: 20,
              width: 20,
              tintColor: item.color,
            }}
          />
        </View>
        <Text style={{ textAlign: "center", flexWrap: "wrap", fontSize: 10 }}>
          {item.description}
        </Text>
      </TouchableOpacity>
    );

    return (
      <FlatList
        ListHeaderComponent={Header}
        data={features}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        style={{ marginTop: 2 }}
      />
    );
  }

  function renderPromos() {
    const HeaderComponent = () => (
      <View>
        {renderHeader()}
        {renderBanner()}
        {renderFeatures()}
      
      </View>
    );


    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          marginVertical: 2,
          width: 50,
        }}
        onPress={() => console.log(item.title)}
      >
        <View
          style={{
            height: 80,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: "primary",
          }}
        >
          <Image
            source={require("../Images/Banner.png")}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        </View>

        <View
          style={{
            padding: 5,
            backgroundColor: "lightGray",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <Text style={{ fontSize: 10 }}>{item.title}</Text>
          <Text style={{ fontSize: 10 }}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ marginBottom: 80 }}></View>}
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {renderPromos()}
    </SafeAreaView>
  );
};

export default Home;
