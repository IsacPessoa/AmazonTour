import { StyleSheet } from "react-native";
import colors from "../../colors";

export default StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "stretch",
    backgroundColor: colors.offWhite,
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: colors.softGreen,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  imagePicker: {
    borderWidth: 1,
    borderColor: colors.softGreen,
    borderRadius: 8,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    overflow: "hidden",
  },

  picker: {
    height: 50,
    width: "100%",
    color: colors.softBlack,
    backgroundColor: colors.softGreen,
    marginBottom: 8,
  },

  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: colors.darkGreen,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  imageText: {
    color: "#999",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
