import { StyleSheet } from "react-native";
import colors from "../../colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offWhite,
    padding: 20,
    paddingTop: 50,
  },

  image: {
    width: "100%",
    height: 250,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: colors.softBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.darkGreen,
    marginBottom: 12,
    textAlign: "center",
  },

  backButton: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 30,
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: colors.softGreen,
    borderRadius: 20,

    shadowColor: colors.softBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,

    flexDirection: "row",
    alignItems: "center",
  },

  arrow: {
    fontSize: 20,
    color: colors.lightGreen,
    fontWeight: "700",
    marginRight: 8,
  },

  backButtonText: {
    fontSize: 18,
    color: colors.forestGreen,
    fontWeight: "700",
    lineHeight: 24,
  },

  descricao: {
    fontSize: 16,
    color: colors.softBlack,
    marginBottom: 30,
    lineHeight: 22,
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },

  button: {
    backgroundColor: colors.forestGreen,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    shadowColor: colors.softBlack,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    minWidth: 120,
  },

  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },

  deleteButton: {
    backgroundColor: colors.red,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    shadowColor: colors.softBlack,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    minWidth: 120,
  },

  deleteButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
});
