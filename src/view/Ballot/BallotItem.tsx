import React, {FC} from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import {Colors} from '../../styles';

export const Text = styled.Text`
  color: ${Colors.black};
  font-family: 'Roboto-Black';
`;

export const View = styled.View``;

const TitleText = styled(Text)`
  max-width: 130px;
  flex-wrap: wrap;
  text-align: center;
  min-height: 60px;
  font-size: 14px;
  font-weight: bold;
`;
export const ButtonText = styled(Text)`
  font-size: 12px;
  margin: 5px;
  font-weight: bold;
`;
export const Touchable = styled.TouchableOpacity`
  borderradius: 5px;
  background-color: ${Colors.grey};
  margin-vertical: 13px;
`;
const HiglightedTouchable = styled(Touchable)`
  background-color: ${Colors.milkWhite};
`;
const DefaultWrapper = styled(View)`
  border-width: 0.2px;
  padding: 5px;
  width: 120px;
  align-items: center;
  margin-vertical: 5px;
  margin-right: 10px;
  border-color: ${Colors.blue};
  background-color: ${Colors.skyBlue};
`;
const HiglightedWrapper = styled(DefaultWrapper)`
  background-color: ${Colors.green};
`;
const imageStyle = {
  width: 80,
  height: 80,
  borderRadius: 50,
  borderWidth: 1,
  borderColor: Colors.blue,
};

type ListItemProps = {
  title: string;
  id: string;
  photoUrL: string;
  categoryId: string;
  value: {id?: string; categoryId?: string};
  setValues: (id: string, categoryId: string) => void;
};

const BallotItem: FC<ListItemProps> = ({
  id,
  photoUrL,
  title,
  categoryId,
  value,
  setValues,
}) => {
  // conditionally renders parent container style according to selection
  const Wrapper =
    value[categoryId as keyof typeof value] === id
      ? HiglightedWrapper
      : DefaultWrapper;
  const Button =
    value[categoryId as keyof typeof value] === id
      ? HiglightedTouchable
      : Touchable;
  return (
    <Wrapper>
      <TitleText>{title}</TitleText>
      <FastImage
        style={imageStyle}
        source={{
          uri: photoUrL,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      {/* making a selection*/}
      <Button
        onPress={() => {
          setValues(id, categoryId);
        }}>
        <ButtonText>Select</ButtonText>
      </Button>
    </Wrapper>
  );
};

export default BallotItem;
