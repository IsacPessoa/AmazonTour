import { StyleSheet } from "react-native";
import colors from "../../colors";

export default StyleSheet.create({
  keyboardView: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  container: {
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    resizeMode: "contain",
    marginBottom: 20,
  },
  card: {
    width: "100%",
    backgroundColor: colors.offWhite,
    borderRadius: 20,
    padding: 20,
    elevation: 4,
    shadowColor: colors.softBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.darkGreen,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: colors.white,
    color: colors.black,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
    backgroundColor: colors.offWhite,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    backgroundColor: colors.white,
    color: colors.black,
  },
  button: {
    backgroundColor: colors.darkGreen,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    color: colors.black,
  },
  registerText: {
    textAlign: "center",
    fontSize: 14,
    color: colors.darkGreen,
    fontWeight: "bold",
    marginTop: 5,
  },
});
