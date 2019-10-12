import React, {useState} from 'react';
import {TouchableWithoutFeedback, View, Text} from 'react-native';

const Button = ({
  children,
  elementChild: Boolean,
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
        { ! elementChild ? <Text style={styleButtonText}>{children}</Text> : children }
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
