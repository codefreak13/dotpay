import React, { FC } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native'
import BallotItem, { Text, View } from './BallotItem';
import { ItemProps, HomeProps } from './Home'

const Wrapper = styled(View)`
flex:1;
`
const CategoryWrapper = styled(View)`
margin-bottom: 10px;
background-color: #BAC8D3;
padding: 5px;
`
const CategoryText = styled(Text)`
font-size: 16px;
font-weight: bold
`
type BallotListProps = {
    value: { id?: string, categoryId?: string },
    setValues: (id: string, categoryId: string) => void
} & HomeProps

const BallotList: FC<BallotListProps> = ({ title, items, id, setValues, value }) => {

    return (
        <Wrapper>
            {/* ctaegory title */}
            <CategoryWrapper>
                <CategoryText>{title}</CategoryText>
            </CategoryWrapper>

            {/* category items */}
            <FlatList
                data={items}
                keyExtractor={(item: ItemProps) => item.id}
                renderItem={({ item }) => <BallotItem {...item} categoryId={id} setValues={setValues} value={value} />}
                showsVerticalScrollIndicator={false}
                numColumns={3}
                style={{
                    justifyContent: 'center',
                    marginBottom: 30,
                    flex: 1
                }}
            />
        </Wrapper>
    )
};
export default BallotList;
