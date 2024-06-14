import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "../../redux/slices/settings";
import { Platform } from "react-native";

export default function AboutScreen() {
  const colors = useSelector(Colors);

  return (
    <View style={[styles.container, { backgroundColor: colors.dark }]}>
      {Platform.OS !== "web" && (
        <View style={styles.logoContainer}>
          <Text style={[styles.logo, { color: colors.light }]}>
            Về chúng tôi
          </Text>
        </View>
      )}

      <ScrollView
        style={[
          styles.settingContainer,
          { backgroundColor: colors.dark, borderColor: colors.light },
        ]}
      >
        <Text
          style={[styles.settingText, { color: colors.light }]}
          onPress={() => {}}
        >
          <Text style={{ fontFamily: "Poppins-Bold" }}>
            Một sản phẩm của tập đoàn VAK group.
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    fontSize: 40,
    fontFamily: "Poppins-Regular",
    textAlign: "left",
  },
  logoContainer: {
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
  },

  settingContainer: {
    minWidth: "90%",
    maxHeight: "78%",
    borderWidth: 2,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  settingText: {
    fontFamily: "Poppins-Regular",
    fontSize: 17,
    textAlign: "justify",
    padding: 5,
  },
});
