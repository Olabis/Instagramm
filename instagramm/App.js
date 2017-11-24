import React, {Component} from 'react';
import { Text, View, Image, ImageBackground, StatusBar, ScrollView, Linking } from 'react-native';
import LoginButton from './src/components/LoginButton';
import TappableText from './src/components/TappableText';
import Dimensions from 'Dimensions';


const windowSize = Dimensions.get('window');
const standardComponentWidth = windowSize.width * 0.82

const color = {
  facebook: 'rgb(59, 88, 152)',
  text: 'rgba(255, 255, 255, 0.75)',
  instagramButtonBorderColor: 'rgba(255, 255, 255, 0.35)'
}


const loginButtonInfo = {
  height: 45,
  pageFontSize: 12,
  borderWidth: 0.8,
  borderRadius: 5
}

const urls = {
  forgotInstagramLogin: 'https://www.instagram.com/accounts/password/reset',
  twitterLogin: 'https://twitter.com/login?lang=en',
  instagramSignUp: 'https://www.instagram.com/accounts/emailsignup/?hl=en',
  instagramAuthLogin: 'https://api.instagram.com/oauth/authorize/?client_id=cda6dee7d8164a868150910407962f52&redirect_uri=http://www.kaitechconsulting.com&response_type=token&scope=basic+follower_list+comments+likes',
  instagramLogout: 'https://instagram.com/accounts/logout',
  instagramBase: 'https://www.instagram.com/',
}


export default class App extends Component {

  constructor(props){
    super(props);
  }

  loginButtonPressed = () => {
    console.log('Button was Pressed!!');
  }


  loginScreenComponent = () => {
    return (
      <ImageBackground
        source={require('./src/images/Orange-Fun.jpg')}
        resizeMode={'cover'} style={viewStyles.container}
      >


        <StatusBar
          backgroundColor='blue'
          barStyle='light-content'
        />

        <ScrollView>

          <Image
            source={require('./src/images/instagram-text-logo.png')}
            style={viewStyles.instagramTextLogo}
            resizeMode={'contain'}
          />

          <LoginButton
            buttonViewStyle={viewStyles.instagramLoginButtonView}
            buttonTextStyle={{color: color.text, fontWeight: '500'}}
            buttonTapped={this.loginButtonPressed}
            touchableHighlightStyle={viewStyles.instagramButtonTouchableHighlightStyle}
            activeOpacity={0.75}
          >
            Log In (Via instagram)
          </LoginButton>

          <LoginButton
            buttonViewStyle={[viewStyles.instagramLoginButtonView, viewStyles.facebookLoginButtonView]}
            buttonTextStyle={{color: color.text, fontWeight: '500'}}
            buttonTapped={this.loginButtonPressed}
            touchableHighlightStyle={[viewStyles.instagramButtonTouchableHighlightStyle, viewStyles.facebookButtonTouchableHighlightStyle]}
            activeOpacity={0.75}
          >
            Facebook login
          </LoginButton>

          <View style={viewStyles.forgottenLoginEncapsulationView}>
            <Text style={textStyles.forgottenLogin}>Forgot Your Login Details?</Text>
            <TappableText
              textStyle={[textStyles.forgottenLogin, textStyles.forgottenLoginBold]}
              textTapped={ () => Linking.openURL(urls.forgotInstagramLogin)}
            >
              Get Help Signing In
            </TappableText>

          </View>

        </ScrollView>

      </ImageBackground>
    );
  }

  render() {
    return (
      this.loginScreenComponent()
    );
  }


}

const viewStyles = {
  container: {
    flex: 1,
    alignItems: 'center',
  },
  instagramTextLogo:{
    width: 150,
    height: 80,
    marginTop: '40%',
    marginBottom: 25,
    alignSelf: 'center'
  },
  instagramLoginButtonView: {
    backgroundColor: 'transparent',
    borderColor: color.instagramButtonBorderColor,
    borderWidth: loginButtonInfo.borderWidth,
    borderRadius: loginButtonInfo.borderRadius,
    width: standardComponentWidth,
    height: loginButtonInfo.height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  instagramButtonTouchableHighlightStyle: {
    backgroundColor: 'transparent',
    width: standardComponentWidth,
    height: loginButtonInfo.height,
    marginTop: 5
  },
  facebookLoginButtonView: {
    backgroundColor: color.facebook

  },
  facebookButtonTouchableHighlightStyle: {
    marginTop: 20,
    marginBottom: 10
  },
  forgottenLoginEncapsulationView: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },

};

const textStyles = {
  forgottenLogin: {
    color: 'white',
    fontSize: loginButtonInfo.pageFontSize,
    backgroundColor: 'transparent'
  },
  forgottenLoginBold: {
    fontWeight: 'bold',
    marginLeft: 2
  },

};
