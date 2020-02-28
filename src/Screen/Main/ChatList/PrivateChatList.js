import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Content, Icon, Title, Card } from 'native-base';
import MainCss from '../MainCss';
import PravateChatListComponent from './PrivateChatListComponent';



export default class PrivateChatList extends Component {

    constructor() {
        super();
        this.state = {
            data: [
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                }, {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },

                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },

            ],
        };
    }


      _renderItem=({item})=>(
        < PravateChatListComponent
        name={item.name}
        imgpro={item.image}
        date={item.date}

        
    />
      )
    render() {
        return (
            <Container>
                <Header style={MainCss.header}>
                    <Text></Text>
                    <Title>private Chat List</Title>
                    <Text></Text>
                </Header>
              
                    <FlatList
                        data={this.state.data}
                        renderItem={this._renderItem} />
                        
             
            </Container>
        );
    }
}

