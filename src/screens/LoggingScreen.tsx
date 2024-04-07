import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

// Import the global authentication manager
import { useAuth } from "../providers/AuthProvider";

import Header from "../components/auth/Header";

const LoggingScreen = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  return (
    <SafeAreaView>
      <Header
        logo={require("../../assets/images/google-logo.png")}
        heading="Login to your"
        headingText="swape mate account"
        backgroundImage={require("../../assets/images/blackbackground.png")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default LoggingScreen;
