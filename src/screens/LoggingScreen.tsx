import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

// Import the global authentication manager
import { useAuth } from "../providers/AuthProvider";

import Header from "../components/auth/Header";
import AuthButton from "../components/auth/0authButton";
import Seperator from "../components/auth/Seperator";
import InputField from "../components/auth/InputFeild";
import LinkText from "../components/common/LinkText";
import CustomButton from "../components/common/CustomButton";
const LoggingScreen = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const handleEmailChange = () => {};
  const handleForgotPassword = () => {
    console.log("Forgot password");
  };
  const handleLogin = () => {
    console.log("Loging");

  }
  return (
    <SafeAreaView style={styles.container}>
      <Header
        logo={require("../../assets/images/logo.png")}
        heading="Login to your"
        headingText="swape mate account"
        backgroundImage={require("../../assets/images/blackbackground.png")}
      />

      <View style={styles.body}>
        <AuthButton />

        <View style={styles.seperator}>
          <Seperator />
        </View>

        <View style={[styles.input, { marginBottom: 15 }]}>
          <InputField
            label="Email Address"
            type="email-address"
            placeholder="you@example.com"
            onChangeText={handleEmailChange}
          />
        </View>

        <View style={styles.input}>
          <InputField
            label="Password"
            placeholder="Enter your password"
            onChangeText={(text) => console.log(text)}
            isPassword={true}
          />
        </View>

        <LinkText text="Forgot Password" onPress={handleForgotPassword} />
        <View style={styles.signupButton}>
          <CustomButton
            color="#007BFF"
            text="Login"
            onPress={handleLogin}
            iconName="arrowright"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    paddingTop: 40,
    marginHorizontal: 20,
  },
  seperator: {
    marginTop: 25,
    marginBottom: 15,
  },
  input: {
    marginBottom: 15,
  },
  signupButton: {
    marginTop: 15,
  }
});

export default LoggingScreen;
