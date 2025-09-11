import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import {
  ImageBackground,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { StyleSheet } from "react-native";
import { styles } from "@/styles/_mainstyle";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={BACKGROUNDIMAGE}
          style={styles.backgroundImageContainer}
          resizeMode="cover"
        >
          <View style={styles.logoContainer}>
            <Image source={HEROLOGO} />
          </View>
        </ImageBackground>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Find your favorite place here</Text>
          <Text style={styles.titleSubText}>The best prices for over 2 </Text>
          <Text style={styles.titleSubText}>million properties worldwide</Text>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={{ ...styles.buttonPrimaryText, color: "black" }}>
              Join here
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSecondary}>
            <Text style={styles.buttonSecondaryText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", paddingVertical: 20 }}>
          <Text style={{ color: "white" }}>Continue to home</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
