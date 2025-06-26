import { StyleSheet, Platform } from "react-native";
import colors from "../../colors";

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    backgroundColor: colors.white,
  },

  scrollContainer: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: Platform.OS === "android" ? 30 : 0,
    resizeMode: "contain",
  },

  card: {
    backgroundColor: colors.offWhite,
    borderRadius: 10,
    padding: 20,
    shadowColor: colors.softBlack,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.darkGreen,
    marginBottom: 15,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: colors.white,
  },

  inputContainer: {
    position: "relative",
    marginTop: 10,
  },

  showHideButton: {
    position: "absolute",
    right: 15,
    top: Platform.OS === "ios" ? 14 : 10,
  },

  button: {
    backgroundColor: colors.darkGreen,
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },

  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },

  clearButton: {
    backgroundColor: colors.red,
    marginTop: 15,
  },

  clearButtonText: {
    color: colors.white,
  },

  text: {
    marginTop: 20,
    fontSize: 14,
    color: colors.gray,
    textAlign: "center",
  },

  registerText: {
    color: colors.darkGreen,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    textDecorationLine: "underline",
  },
});

export default styles;
