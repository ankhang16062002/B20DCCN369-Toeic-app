import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Colors } from "../../redux/slices/settings";
import { Platform } from "react-native";
import { ResetStats } from "../../redux/slices/stats";

export default function StatsScreen({ navigation }) {
  const dispatch = useDispatch();

  const numberCorrect = useSelector((state) => state.stats.numberCorrect);
  const totalQuestion = useSelector((state) => state.stats.totalQuestion);

  const colors = useSelector(Colors);

  const comingFromHome = useSelector((state) => state.settings.comingFromHome);

  const resetStats = () => dispatch(ResetStats());

  const [rank, setRank] = useState("-");

  const [accuracy, setAccuracy] = useState("-");

  useEffect(() => {
    if (numberCorrect !== null && totalQuestion !== null) {
      let acc = Math.ceil((numberCorrect / totalQuestion) * 100);

      setAccuracy(acc);

      if (acc < 10) setRank("Wood 🪵");
      else if (acc < 25) setRank("Iron 🪨");
      else if (acc < 35) setRank("Bronze 🔱");
      else if (acc < 45) setRank("Silver ⚓");
      else if (acc < 60) setRank("Gold 🎖");
      else if (acc < 70) setRank("Platinum 💠");
      else if (acc < 80) setRank("Diamond 💎");
      else if (acc < 95) setRank("Master 👑");
      else if (acc < 98) setRank("Professor 🎓");
      else setRank("Legend 🐉");
    }
  }, [numberCorrect, totalQuestion]);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.dark }]}>
      {Platform.OS !== "web" && (
        <View style={styles.logoContainer}>
          <Text style={[styles.logo, { color: colors.light }]}>Điểm cao</Text>
        </View>
      )}

      <View
        style={[
          styles.settingContainer,
          { backgroundColor: colors.dark, borderColor: colors.light },
        ]}
      >
        <Text
          style={[styles.settingText, { color: colors.light }]}
          onPress={() => {}}
        >
          Số câu đúng
        </Text>
        <Text
          style={[styles.settingText, { color: colors.light, fontSize: 50 }]}
          onPress={() => {}}
        >
          {`${numberCorrect || "_"}/${totalQuestion || "_"}`}
        </Text>
      </View>

      <View
        style={[
          styles.settingContainer,
          { backgroundColor: colors.dark, borderColor: colors.light },
        ]}
      >
        <Text
          style={[styles.settingText, { color: colors.light }]}
          onPress={() => {}}
        >
          Phần trăm trả lời đúng
        </Text>
        <Text
          style={[styles.settingText, { color: colors.light, fontSize: 50 }]}
          onPress={() => {}}
        >
          {`${accuracy}%`}
        </Text>
      </View>

      <View
        style={[
          styles.settingContainer,
          { backgroundColor: colors.dark, borderColor: colors.light },
        ]}
      >
        <Text
          style={[styles.settingText, { color: colors.light }]}
          onPress={() => {}}
        >
          Xếp hạng
        </Text>
        <Text
          style={[styles.settingText, { color: colors.light, fontSize: 50 }]}
          onPress={() => {}}
        >
          {rank}
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
              resetStats();
              setAccuracy("-");
              setRank("-");
            }}
          >
            Làm mới
          </Text>
        </TouchableOpacity>
      </View>

      {!comingFromHome ? (
        <>
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
                  navigation.navigate("HomeScreen");
                }}
              >
                Trang chủ
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : null}
    </ScrollView>
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
    textAlign: "center",
  },
});
