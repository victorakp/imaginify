import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SignIn = () => {
  return (
    <View style={styles.signIn}>
      <Image
        style={styles.signInChild}
        contentFit="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Image
        style={styles.signInItem}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Image
        style={styles.signInInner}
        contentFit="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Text style={[styles.isItYourContainer, styles.forgotPasswordTypo]}>
        <Text style={styles.isItYour}>Is it your first time</Text>
        <Text style={styles.signUp}> sign up</Text>
      </Text>
      <Text style={[styles.isItYourContainer, styles.forgotPasswordTypo]}>
        <Text style={styles.isItYour}>Is it your first time?</Text>
        <Text style={styles.signUp}> sign up</Text>
      </Text>
      <Text style={[styles.forgotPassword, styles.forgotPasswordTypo]}>
        Forgot Password?
      </Text>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.rectangleParent, styles.groupViewLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={styles.signIn1}>Sign In</Text>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <TextInput style={[styles.password, styles.emailTypo]}>
            Password
          </TextInput>
          <View style={[styles.groupInner, styles.groupInnerPosition]} />
          <Text style={[styles.email, styles.emailTypo]}>Email</Text>
        </View>
      </View>
      <Image
        style={[styles.ceukz1Logo11Icon, styles.groupInnerPosition]}
        contentFit="cover"
        source={require("../assets/ceukz1logo1-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPasswordTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  groupViewLayout: {
    height: 284,
    width: 327,
    position: "absolute",
  },
  groupLayout: {
    height: 65,
    width: 324,
    borderWidth: 2,
    borderColor: Color.colorDarkslategray,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
  },
  emailTypo: {
    fontSize: FontSize.size_lg,
    left: 40,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  groupInnerPosition: {
    left: "50%",
    position: "absolute",
  },
  signInChild: {
    top: -112,
    left: -161,
    width: 422,
    height: 681,
    position: "absolute",
  },
  signInItem: {
    top: -81,
    left: 61,
    width: 386,
    height: 724,
    position: "absolute",
  },
  signInInner: {
    top: -1,
    left: 231,
    width: 406,
    height: 716,
    position: "absolute",
  },
  isItYour: {
    color: Color.colorGainsboro,
  },
  signUp: {
    color: Color.colorDarkslategray,
  },
  isItYourContainer: {
    top: 830,
    left: 144,
  },
  forgotPassword: {
    top: 700,
    left: 279,
    color: Color.colorGainsboro,
  },
  groupChild: {
    top: 213,
    backgroundColor: Color.colorDarkslategray,
    left: 3,
    width: 324,
    borderWidth: 2,
    borderColor: Color.colorDarkslategray,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  signIn1: {
    marginTop: 66,
    marginLeft: -48.5,
    top: "50%",
    fontSize: 36,
    color: Color.colorWhite,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  groupItem: {
    top: 99,
    left: 3,
    width: 324,
    borderWidth: 2,
    borderColor: Color.colorDarkslategray,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  password: {
    top: 109,
  },
  groupInner: {
    marginLeft: -163.5,
    height: 65,
    width: 324,
    borderWidth: 2,
    borderColor: Color.colorDarkslategray,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    top: 0,
  },
  email: {
    top: 5,
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  groupView: {
    top: 500,
    left: 51,
  },
  ceukz1Logo11Icon: {
    marginLeft: -171,
    top: 400,
    width: 341,
    height: 74,
  },
  signIn: {
    backgroundColor: "#000",
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default SignIn;
