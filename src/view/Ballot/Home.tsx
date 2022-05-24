import React, {useState, useEffect} from 'react';
import {FlatList, Alert} from 'react-native';
import styled from 'styled-components/native';
import api from '../../Api/Api';
import BallotList from './BallotList';
import {DotPayModal, DotPayButton} from '../../components';

const Wrapper = styled.View`
  flex: 1;
  margin-horizontal: 15px;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const Text = styled.Text`
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
`;

export const HeaderText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 10px;
`;

const buttonStyle = {
  marginTop: 10,
};

export type ItemProps = {
  title: string;
  photoUrL: string;
  id: string;
};

export type HomeProps = {
  id: string;
  title: string;
  items: Array<ItemProps>;
};

const Home = () => {
  const [data, setdata] = useState<Array<HomeProps>>([]);
  const [values, setvalue] = useState<
    Partial<{id: string; categoryId: string}>
  >({});
  const [modalToggle, setModalToggle] = useState<boolean>(false);
  const categoryLength = data.length;

  const fetchData = async () => {
    // fetching data from endpoint
    try {
      const data = await api.getBallotData();
      setdata(data.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const setValues = (id: string, categoryId: string) => {
    // function for selecting from a category
    const ballotData = {...values};
    ballotData[categoryId as keyof typeof ballotData] = id;
    setvalue(ballotData);
  };

  const toggleModal = () => {
    setModalToggle(!modalToggle);
  };

  const displayResult = () => {
    if (Object.keys(values).length < categoryLength) {
      return Alert.alert('Kindly make a selection from all categories');
    }
    toggleModal();
  };

  return (
    <Wrapper>
      {/* renders categories and items */}
      <FlatList
        data={data}
        keyExtractor={(item: HomeProps) => item.id}
        renderItem={({item}) => (
          <BallotList {...item} setValues={setValues} value={values} />
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <>
            {data.length > 0 && (
              <DotPayButton buttonTitle="SUBMIT VOTE" onPress={displayResult} />
            )}
          </>
        }
        ListHeaderComponent={<HeaderText>Golden Glode Award</HeaderText>}
        ListEmptyComponent={<Text>No Ballots</Text>}
      />

      {/* success modal */}
      <DotPayModal
        title="REVIEW YOUR SELECTION"
        content={
          <>
            {Object.entries(values).map(([key, value]) => (
              <Text key={key}>
                {key}: <Text>{value}</Text>
              </Text>
            ))}
            <DotPayButton
              buttonTitle="Close"
              onPress={toggleModal}
              buttonStyle={buttonStyle}
            />
          </>
        }
        isVisible={modalToggle}
        toggleModal={toggleModal}
      />
    </Wrapper>
  );
};

export default Home;
