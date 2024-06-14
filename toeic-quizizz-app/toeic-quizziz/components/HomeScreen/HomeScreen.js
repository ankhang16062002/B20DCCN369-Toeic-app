import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Colors } from "../../redux/slices/settings";
import { SetComingFromHome } from "../../redux/slices/settings";
import { useSelector, useDispatch } from "react-redux";
import { ResetQuiz } from "../../redux/slices/quiz";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const colors = useSelector(Colors);
  const setComingFromHome = (payload) => dispatch(SetComingFromHome(payload));
  const resetQuiz = () => dispatch(ResetQuiz());

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.dark }]}>
      <View style={styles.logoContainer}>
        <Text style={[styles.logo, { color: colors.light }]}>VAK</Text>
        <Text
          style={[
            styles.logo,
            { color: colors.light, fontSize: 20, fontFamily: "Poppins-Bold" },
          ]}
        >
          Chào mừng bạn đến với ứng dụng luyện thi toeic
        </Text>
      </View>
      {
        <View style={styles.quotesContainer}>
          <Text style={[styles.quotesText, { color: colors.light }]}>
            Hoàn thành bộ câu hỏi chúng tôi đã xây dựng sẵn để đánh giá năng lực
            của bạn
          </Text>
        </View>
      }
      <View
        style={[
          styles.playContainer,
          { backgroundColor: colors.light, borderColor: colors.dark },
        ]}
      >
        <TouchableOpacity>
          <Text
            style={[styles.playText, { color: colors.dark }]}
            onPress={() => {
              resetQuiz();
              navigation.navigate("QuizScreen");
            }}
          >
            Thử thách ngay
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.playContainer,
          { backgroundColor: colors.light, borderColor: colors.dark },
        ]}
      >
        <TouchableOpacity>
          <Text
            style={[styles.playText, { color: colors.dark }]}
            onPress={() => {
              navigation.navigate("StatsScreen");
              setComingFromHome(true);
            }}
          >
            Điểm của tôi
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.playContainer,
          { backgroundColor: colors.light, borderColor: colors.dark },
        ]}
      >
        <TouchableOpacity>
          <Text
            style={[styles.playText, { color: colors.dark }]}
            onPress={() => navigation.navigate("SettingsScreen")}
          >
            Cài đặt
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.playContainer,
          { backgroundColor: colors.light, borderColor: colors.dark },
        ]}
      >
        <TouchableOpacity>
          <Text
            style={[styles.playText, { color: colors.dark }]}
            onPress={() => navigation.navigate("AboutScreen")}
          >
            Về chúng tôi
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    fontSize: 70,
    fontFamily: "Poppins-ExtraBold",
    textAlign: "center",
  },
  logoContainer: {
    marginTop: 100,
    marginBottom: 30,
    marginHorizontal: 20,
  },
  quotesContainer: {
    marginHorizontal: 30,
    marginBottom: 0,
    maxHeight: 60,
    minHeight: 60,
  },
  quotesText: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },
  playContainer: {
    minWidth: "90%",
    borderWidth: 2,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  playText: {
    fontFamily: "Poppins-Bold",
    fontSize: 17,
    textAlign: "center",
  },
});
