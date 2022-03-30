import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const SignUp = ({navigation}) => {
  const [showPassword, setShowPassword] = React.useState(false);

//   const [areas, setAreas] = React.useState([]);
//   const [selectedArea, setSelectedArea] = React.useState(null);
//   const [modalVisible, setModalVisible] = React.useState(false);

//   React.useEffect(() => {
//     fetch("https://restcountries.eu/rest/v2/all")
//       .then((response) => response.json())
//       .then((data) => {
//         let areaData = data.map((item) => {
//           return {
//             code: item.alpha2Code,
//             name: item.name,
//             callingCode: `+${item.callingCodes[0]}`,
//             flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
//           };
//         });

//         setAreas(areaData);

//         if (areaData.length > 0) {
//           let defaultData = areaData.filter((a) => a.code == "US");

//           if (defaultData.length > 0) {
//             setSelectedArea(defaultData[0]);
//           }
//         }
//       });
//   }, []);

  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
          paddingHorizontal: 16,
        }}
        onPress={() => console.log("SignUp")}
      >
        <Ionicons name="arrow-back" size={30} color="white" />
        <Text style={{ color: "white", fontSize: 20, marginLeft: 10 }}>
          SignUp
        </Text>
      </TouchableOpacity>
    );
  }

  function renderLogo() {
    return (
      <View
        style={{
          marginTop: 50,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../Images/LOGO.png")}
          resizeMode="contain"
          style={{ width: "70%" }}
        />
      </View>
    );
  }

  function renderForm() {
    return (
      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        {/* Full Name */}
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "white", fontSize: 20}}>Full Name</Text>
          <TextInput
            style={{
              marginVertical: 5,
              borderBottomColor: "white",
              borderBottomWidth: 1,
              height: 40,
              color: "white",
            }}
            placeholder="Enter Full Name"
            placeholderTextColor= {"white" }
            selectionColor= {"white" }
          />
        </View>

        {/* Phone Number */}
        <View style={{ marginTop: 25 }}>
          <Text style={{ color: "white", fontSize: 20}}>Phone Number</Text>

          <View style={{ flexDirection: "row" }}>
            {/* Country Code */}
            <View
              style={{
                width: 100,
                height: 50,
                marginHorizontal: 5,
                borderBottomColor: "white",
                borderBottomWidth: 1,
                flexDirection: "row",
              }}
            //   onPress={() => setModalVisible(true)}
            >
              <View style={{ justifyContent: "center" }}></View>
              <View
                style={{
                  justifyContent: "center",
                  marginLeft: 5,
                  marginTop: 10,
                  flexDirection: "row",
                }}
              >
                <Image
                  source={require("../Images/Ghana.png")}
                  resizeMode="contain"
                  style={{
                    marginLeft: 5,
                    width: 35,
                    height: 35,
                  }}
                />
                <Text style={{ color: "white", fontSize: 16, padding: 5 }}>
                  +233
                </Text>
              </View>

              <View style={{ justifyContent: "center", marginLeft: 5 }}>
                <Text style={{ color: "white" }}>
                  
                </Text>
              </View>
            </View>

            {/* Phone Number */}
            <TextInput
              style={{
                flex: 1,
                marginVertical: 20,
                borderBottomColor: "white",
                borderBottomWidth: 1,
                fontSize: 20,
                height: 30,
                color: "white",
              }}
              placeholder="012 345 6789"
              placeholderTextColor={"white"}
              selectionColor={"white"}
            />
          </View>
        </View>

        {/* Password */}
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "white", fontSize: 20}}>Password</Text>
          <TextInput
            style={{
              marginVertical: 15,
              borderBottomColor: "white",
              borderBottomWidth: 1,
              height: 40,
              color: "white",
            }}
            placeholder="Enter Password"
            placeholderTextColor={"white"}
            selectionColor={"white"}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              bottom: 10,
              marginBottom: 15
            }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <AntDesign name="eye" size={25} color="white"  />
            {/* showPassword ? icons.disable_eye : icons.eye */}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

 
  function renderButton() {
    return (
        <View style={{ margin: 15 }}>
            <TouchableOpacity
                style={{
                    height: 60,
                    backgroundColor: "black",
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={{ color: "white", fontSize: 20}}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "20" : null}
      style={{ flex: 1, backgroundColor: "#2861e2" }}
    >
      <ScrollView>
        {renderHeader()}
        {renderLogo()}
        <Text
          style={{
            color: "white",
            fontSize: 30,
            marginLeft: 135,
            fontStyle: "italic",
          }}
        >
          Bonuspay
        </Text>
        {renderForm()}
        {renderButton()}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
