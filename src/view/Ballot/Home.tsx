import React, { useState, useEffect } from 'react';
import { FlatList, Alert } from 'react-native';
import styled from 'styled-components/native'
import api from '../../Api/Api'
import BallotList from './BallotList';
import { Touchable, ButtonText as Text } from './BallotItem';
import Modal from 'react-native-modal';

const Wrapper = styled.View`
flex:1;
margin-horizontal: 15px;
margin-top: 50px
`
const Button = styled(Touchable)`
background-color: #ACD898;
align-items: center;
padding: 10px;
margin-vertical: 10px
`
const ButtonText = styled(Text)`
font-size: 14px;
text-align: center;
margin-top:10px
`
const ModalWrapper = styled.View`
flex: 1;
background-color: #FFF;
max-height: 350px;
flex: 1;
border-radius: 10px;
padding-top: 20px
`
const ModalBody = styled.View`
margin: 20px
`
export type ItemProps = {
    title: string,
    photoUrL: string,
    id: string
}

export type HomeProps = {
    id: string,
    title: string,
    items: Array<ItemProps>,
}

const Home = () => {
    const [data, setdata] = useState<Array<HomeProps>>([]);
    const [values, setvalue] = useState<Partial<{ id: string, categoryId: string }>>({});
    const [modalToggle, setModalToggle] = useState<boolean>(false);

    useEffect(() => {
        // fetching data from endpoint
        const fetchData = async () => {
            const res = await api.getBallotData()
            let data = res.items
            setdata(data)
        }
        fetchData()
    }, [])


    const setValues = (id: string, categoryId: string) => {
        // function for selecting from a category
        const ballotData = { ...values };
        ballotData[categoryId as keyof typeof ballotData] = id
        setvalue(ballotData);
    }

    const toggleModal = () => {
        setModalToggle(!modalToggle)
    }

    return (
        <Wrapper>
            {/* renders categories and items */}
            <FlatList
                data={data}
                keyExtractor={(item: HomeProps) => item.id}
                renderItem={({ item }) => <BallotList {...item} setValues={setValues} value={values} />}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={
                    <Button onPress={() => {
                        if(Object.keys(values).length < 7){
                            return Alert.alert('Kindly make a selection across all categories')
                        }
                        toggleModal()
                    }}>
                        <ButtonText>
                            SUBMIT VOTE BUTTON
                        </ButtonText>
                    </Button>
                }
            />

            {/* success modal */}
            <Modal
                isVisible={modalToggle}
                hasBackdrop={true}
                style={{ margin: 20 }}
                onBackButtonPress={() => { toggleModal() }}
                onBackdropPress={() => { toggleModal() }}
                animationIn="slideInUp"
                animationInTiming={350}
                coverScreen={true}
                animationOut="slideOutDown"
                useNativeDriver={true}>
                <ModalWrapper>
                    <ButtonText>
                        YOUR SELECTION
                    </ButtonText>
                    <ModalBody>
                    {Object.entries(values).map(([key, value]) => 
                    <Text key={key}>
                        {key}: <ButtonText>{value}</ButtonText>
                    </Text>
                    )}
                    </ModalBody>
                </ModalWrapper>
            </Modal>
        </Wrapper>
    );
};

export default Home;
