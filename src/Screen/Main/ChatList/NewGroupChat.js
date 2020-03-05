import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Platform, TextInput } from 'react-native';
import { Container, Header, Content, Icon, Title, Card, Footer, Input, Thumbnail } from 'native-base';
import MainCss from '../MainCss';
import GroupMemberComponent from './GroupMemberComponent'



export default class NewGroupChat extends Component {


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
            ]
        }
    }

    _renderItem = ({ item }) => (
        < GroupMemberComponent
            name={item.name}
            imgpro={item.image}
            date={item.date}


        />)
    render() {
        return (
            <Container>
                <Header style={MainCss.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon name="arrowleft" type="AntDesign" style={{ color: '#faa61a' }} />
                    </TouchableOpacity>
                    <Title>new Group Chat</Title>
                    <Text></Text>
                </Header>

                <Icon name="users" type="Entypo" style={{ alignSelf: 'center', color: 'rgb(150,150,150)', fontSize: 150, }} />
                <TextInput placeholder="Type group name" style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: 200, alignSelf: 'center', height: 35, marginTop: 10 }} />

                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem} />

            </Container>
        )
    }
}