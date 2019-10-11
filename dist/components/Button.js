import React, {useState} from 'react';
import {TouchableWithoutFeedback, View, Text} from 'react-native';

const Button = ({
  children,
  onPress,
  onLongPress,
  style,
  stylePressed,
  styleText,
  styleTextPressed,
}) => {
  const [styleButton, setStyleButton] = useState(style);
  const [styleButtonText, setTextStyle] = useState(styleText);

  function btnOnPress() {
    setStyleButton(stylePressed);
    setTextStyle(styleTextPressed);

    if (typeof onPress === 'function') {
      onPress();
    }
  }

  function btnOnLongPress() {
    setStyleButton(stylePressed);
    setTextStyle(styleTextPressed);

    if (typeof onLongPress === 'function') {
      onLongPress();
    }
  }

  return (
    <TouchableWithoutFeedback
      onPressIn={btnOnPress}
      onLongPress={btnOnLongPress}
      onPressOut={() => {
        setStyleButton(style);
        setTextStyle(styleText);
      }}>
      <View style={styleButton}>
        <Text style={styleButtonText}>{children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
