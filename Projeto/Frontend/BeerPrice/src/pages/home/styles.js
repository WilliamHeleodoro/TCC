import styled from 'styled-components/native';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
    background-color: #000000;
    flex: 1;
    padding: 4px 0;
`;

export const SearchContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 50px;
    align-items: center;
    padding: 0 14px;
    margin-bottom: 8px;
`;

export const Input = styled.TextInput`
    background-color: rgba(255,255,255, 0.4);
    width: 85%;
    height: 50px;
    border-radius: 50px;
    padding: 8px 15px;
    font-size: 14px;
    color: #fff;
    font-family: ${fonts.fonts.placeHolder};
    
`;

export const SearchButton = styled.TouchableOpacity`
    width: 15%;
    height: 50px;
    align-items: center;
    justify-content: center;
    
`;


export const ListaCervejas = styled.FlatList`
   
`;
