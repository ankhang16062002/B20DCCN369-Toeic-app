import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { darkColors, lightColors } from "../../assets/colors/colors";
import { useDispatch, useSelector } from "react-redux";
import { SetColorIndex } from "../../redux/slices/settings";
import { SetDiscoveryMode } from "../../redux/slices/settings";
import { SetAllColors } from "../../redux/slices/settings";
import { SetAllColorsHelper } from "../../redux/slices/settings";
import { Colors } from "../../redux/slices/settings";
import { Platform } from "react-native";
import { SetRandomize } from "../../redux/slices/settings";
import { SetAudio } from "../../redux/slices/settings";

export default function SettingsScreen() {
  const colors = useSelector(Colors);
  const colorCodes = [
    "Navy",
    "Blue Sky",
    "Purple Monarchy",
    "Toffee",
    "Orangica",
    "Pink Princess",
    "Deep Eclipse",
    "Moon Silver",
    "Lavender",
    "Pitch Black",
    "Blue Sailor",
    "Lime",
  ];
  const dispatch = useDispatch();

  const [colorIndex, setColorIndex] = [
    useSelector((state) => state.settings.colorIndex),
    (payload) => dispatch(SetColorIndex(payload)),
  ];

  const [discoveryMode, setDiscoveryMode] = [
    useSelector((state) => state.settings.discoveryMode),
    (payload) => dispatch(SetDiscoveryMode(payload)),
  ];

  const [allColors, setAllColors] = [
    useSelector((state) => state.settings.allColors),
    (payload) => dispatch(SetAllColors(payload)),
  ];

  const [allColorsHelper, setAllColorsHelper] = [
    useSelector((state) => state.settings.allColorsHelper),
    (payload) => dispatch(SetAllColorsHelper(payload)),
  ];

  const shownQuestion = useSelector((state) => state.quiz.shownQuestion);
  const [randomize, setRandomize] = [
    useSelector((state) => state.settings.randomize),
    (payload) => dispatch(SetRandomize(payload)),
  ];

  const [audio, setAudio] = [
    useSelector((state) => state.settings.audio),
    (payload) => dispatch(SetAudio(payload)),
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.dark }]}>
      {Platform.OS !== "web" && (
        <View style={styles.logoContainer}>
          <Text style={[styles.logo, { color: colors.light }]}>Cài đặt</Text>
        </View>
      )}
      <View style={{ marginHorizontal: 20, padding: 5 }}>
        <Text style={[{ color: colors.light, fontSize: 20 }]}>Giao diện</Text>
      </View>

      <View
        style={[
          styles.settingContainer,
          { backgroundColor: colors.light, borderColor: colors.dark },
        ]}
      >
        <TouchableOpacity>
          <Text
            style={[styles.settingText, { color: colors.dark }]}
            onPress={() => {
              if (allColorsHelper == 1) {
                setAllColors(darkColors);
                setAllColorsHelper(0);
              } else {
                setAllColors(lightColors);
                setAllColorsHelper(1);
              }
            }}
          >
            Giao diện: {allColorsHelper === 1 ? "Light" : "Dark"}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        opacity={discoveryMode ? 0.8 : 1.0}
        style={[
          styles.settingContainer,
          { backgroundColor: colors.light, borderColor: colors.dark },
        ]}
      >
        <TouchableOpacity>
          <Text
            style={[styles.settingText, { color: colors.dark }]}
            onPress={() => {
              if (!discoveryMode) {
                setColorIndex((colorIndex + 1) % colorCodes.length);
              }
            }}
          >
            Bảng màu: {colorCodes[colorIndex]}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.settingContainer,
          { backgroundColor: colors.light, borderColor: colors.dark },
        ]}
      >
        <TouchableOpacity>
          <Text
            style={[styles.settingText, { color: colors.dark }]}
            onPress={() => {
              setDiscoveryMode(!discoveryMode);
            }}
          >
            Thay đổi màu cho mỗi câu hỏi: {discoveryMode ? "Bật" : "Tắt"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 20, padding: 5 }}>
        <Text style={[{ color: colors.light, fontSize: 20 }]}>
          Tùy chọn khác
        </Text>
      </View>
      <View
        style={[
          styles.settingContainer,
          { backgroundColor: colors.light, borderColor: colors.dark },
        ]}
      >
        <TouchableOpacity>
          <Text
            style={[styles.settingText, { color: colors.dark }]}
            onPress={() => {
              setRandomize(!randomize);
            }}
          >
            Thứ tự câu hỏi random: {randomize ? "Bật" : "Tắt"}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.settingContainer,
          { backgroundColor: colors.light, borderColor: colors.dark },
        ]}
      >
        <TouchableOpacity>
          <Text
            style={[styles.settingText, { color: colors.dark }]}
            onPress={() => {
              setAudio(!audio);
            }}
          >
            Âm Thanh: {audio ? "Bật" : "Tắt"}
          </Text>
        </TouchableOpacity>
      </View>
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
    borderWidth: 2,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  settingText: {
    fontFamily: "Poppins-Bold",
    fontSize: 17,
    textAlign: "left",
  },
});
