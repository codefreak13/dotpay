import React, {FC} from 'react';
import {StyleProp, ViewStyle, TextStyle} from 'react-native';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background-color: #acd898;
  align-items: center;
  padding: 10px;
`;

const ButtonText = styled.Text`
  font-size: 14px;
  text-align: center;
`;

export type ButtonProps = {
  onPress: () => void;
  buttonTitle: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const DotButton: FC<ButtonProps> = ({
  onPress,
  buttonTitle,
  buttonStyle,
  textStyle,
}) => {
  return (
    <Button onPress={onPress} style={buttonStyle}>
      <ButtonText style={textStyle}>{buttonTitle}</ButtonText>
    </Button>
  );
};

export default DotButton;
