import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { getLocal } from "./helper/common";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import { colors } from "./utils/colors";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const isLogin = async () => {
    await getLocal("token");
    setIsLoading(false);
  };

  useEffect(() => {
    isLogin();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={100} color={colors.prgreen} />
        <Text>loading...</Text>
      </View>
    );
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    height: 600,
    backgroundColor: colors.white,
    justifyContent: "center",
  },
});
