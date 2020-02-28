import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Platform } from 'react-native';
import { Container, Header, Content, Icon, Title, Card, Footer, Input, Thumbnail } from 'native-base';
import Modal from "react-native-modal";
import MainCss from '../MainCss';
import SendPrivate from './SendPrivate';
import ReceivePrivate from './ReceivePrivate';
import ImagePicker from 'react-native-image-picker';

const options = {
    videoQuality: 'medium',
    cameraType: 'back',
    tintColor: 'blue',
    mediaType: 'mixed',
};



export default class NewChatPrivate extends Component {
    constructor() {
        super();
        this.state = {
            isModalVisible: false,
            onBackdropPress: false,
            hide: false,
            hide2: true,
            hide3: true,
            disableinput: true,
            width: 200,
            txt: '',
            data: [
                {
                    key: 'a',
                    text: 'test',
                    image: require('../../../Images/logo.png'),
                    date: '22:00 PM',
                    user_id: 1,

                },
                {
                    key: 'b',
                    text: 'test',
                    image: require('../../../Images/logo.png'),
                    date: '22:00 PM',
                    user_id: 1,

                },
                {
                    key: 'c',
                    text: 'test',
                    image: require('../../../Images/logo.png'),
                    date: '22:00 PM',
                    user_id: 1,

                },
                {
                    key: 'd',
                    text: 'test',
                    image: require('../../../Images/logo.png'),
                    date: '22:00 PM',
                    user_id: 1,

                },
                {
                    key: 'e',
                    text: 'test',
                    image: require('../../../Images/logo.png'),
                    date: '22:00 PM',
                    user_id: 1,

                },
                {
                    key: 'f',
                    text: 'test',
                    image: require('../../../Images/logo.png'),
                    date: '22:00 PM',
                    user_id: 1,

                },
                {
                    key: 'g',
                    text: 'test',
                    image: require('../../../Images/logo.png'),
                    date: '22:00 PM',
                    user_id: 2,
                },
                {
                    key: 'h',
                    text: 'test',
                    image: require('../../../Images/logo.png'),
                    date: '22:00 PM',
                    user_id: 2,
                },

                {
                    key: 'i',
                    text: 'test',
                    image: require('../../../Images/logo.png'),
                    date: '22:00 PM',
                    user_id: 2,
                },


            ],
        };
    }

    textinput(txtchange) {
        this.setState({
            txt: txtchange,
        });
        if (txtchange.length > 0) {
            this.setState({
                disableinput: false,
                hide: true,
                hide2: false,
                hide3: false,
                width: 250,
            });
        }
        else {
            this.setState({
                disableinput: true,
                hide: false,
                hide2: true,
                hide3: true,
                width: 200,
            });
        }
    }
    camera() {
        ImagePicker.launchCamera(options, (response) => {
            const source = { uri: response.uri };
            var d = {
                key: 'v',
                camera: source,
                user_id: 1,
                image: require('../../../Images/logo.png'),
            };

            this.setState(romm => {
                return {
                    data: [...romm.data, d],

                };
            });
            console.warn(this.state.avatarSource)
            setTimeout(() => {
                this.refs.fla.scrollToEnd();
            }, 300);

        });
    }
    galery() {
        ImagePicker.launchImageLibrary(options, (response) => {
            const galery = { uri: response.uri };
            var d = {
                key: 'm',
                galery: galery,
                user_id: 1,
                image: require('../../../Images/logo.png'),
            };

            this.setState(romm => {
                return {
                    data: [...romm.data, d],
                    isModalVisible: !this.state.isModalVisible,
                };
            });
            setTimeout(() => {
                this.refs.fla.scrollToEnd();
            }, 300);

        })
    } catch(error) {
        // Error saving data
    }
    clickinput() {
        var coment = this.state.txt;
        var t = {
            key: 'z',
            text: coment,
            image: require('../../../Images/logo.png'),
            date: '22:00',
            user_id: 1,
        };

        this.setState(rom => {
            return {
                data: [...rom.data, t],
                txt: '',
                disableinput: true,
                hide: false,
                hide2: true,
                hide3: true,
                width: 200,
            };
        });
        setTimeout(() => {
            this.refs.fla.scrollToEnd();
        }, 300);
    }
    toggleModal = () => {
        this.setState({
            isModalVisible: !this.state.isModalVisible,
            onBackdropPress: !this.state.onBackdropPress
        });
    };
    renderItem = ({ item }) => {
        if (item.user_id === 1) {
            return (
                <SendPrivate
                    text={item.text}
                    img={item.image}
                    date={item.date}
                    camera={item.camera}
                    galery={item.galery}
                />
            );
        } else {
            return (
                <ReceivePrivate
                    text={item.text}
                    img={item.image}
                    date={item.date}
                />
            );
        }
    }


    render() {

        return (
            <Container>
                <Header style={MainCss.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon name="arrowleft" type="AntDesign" style={{ color: '#faa61a' }} />
                    </TouchableOpacity>
                    <Title>online chate</Title>
                    <Text></Text>

                </Header>

                <View style={{ flex: 1 }}>
                    <Modal isVisible={this.state.isModalVisible}
                        onBackdropPress={this.toggleModal}
                        backdropColor="white"
                        style={{ justifyContent: 'flex-end' }}
                        backdropOpacity={0.1}
                        animationInTiming={30}
                    >
                        <View style={MainCss.modalstyle}>
                            <View style={MainCss.modalstyle2}>
                                <View style={MainCss.modalstyle3}>
                                    <View style={{ alignItems: 'center' }}>
                                        <TouchableOpacity activeOpacity={0.8} style={MainCss.modaltouch}>
                                            <Icon name="file-document-outline" type="MaterialCommunityIcons" style={{ fontSize: 28, color: '#F5F5F5' }} />
                                        </TouchableOpacity>
                                        <Text style={{ color: '#696969' }}>Document</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <TouchableOpacity activeOpacity={0.8} onPress={() => this.galery()} style={MainCss.modaltouch}>
                                            <Icon name="picture" type="AntDesign" style={{ fontSize: 28, color: '#F5F5F5' }} />
                                        </TouchableOpacity>
                                        <Text style={{ color: '#696969' }}>Galery</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <TouchableOpacity activeOpacity={0.8} onPress={() => this.camera()} style={MainCss.modaltouch}>
                                            <Icon name="camera" type="Feather" style={{ fontSize: 28, color: '#F5F5F5' }} />
                                        </TouchableOpacity>
                                        <Text style={{ color: '#696969' }}>Camera</Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
                <Image source={require('../../../Images/patern2.jpg')} resizeMode='stretch' style={MainCss.backgroundImage} />
                <FlatList
                    ref="fla"
                    data={this.state.data}
                    keyExtractor={(item, index) => item.key}
                    renderItem={this.renderItem}
                />

                <Footer style={MainCss.newchatprivateviewtotal}>
                    <TouchableOpacity activeOpacity={0.8}  onPress={() => this.camera()} style={MainCss.footertouch}>
                        <Icon name="camera" type="Feather" style={MainCss.footericon} />
                    </TouchableOpacity>
                    <View style={{ height: 40, borderRadius: 15, width: (this.state.width) }}>
                        <Input placeholder="Type a message" style={MainCss.inputfooter}
                            value={this.state.txt}
                            onChangeText={(text) => this.textinput(text)}
                        />
                    </View>
                    {this.state.hide3 &&
                        <TouchableOpacity activeOpacity={0.8} onPress={this.toggleModal} style={MainCss.footertouch}>
                            <Icon name="attachment" type="Entypo" style={[MainCss.footericon, { fontSize: 21 }]} />
                        </TouchableOpacity>
                    }
                    {this.state.hide2 &&
                        <TouchableOpacity activeOpacity={0.8} style={MainCss.footertouch}>
                            <Icon name="keyboard-voice" type="MaterialIcons" style={MainCss.footericon} />
                        </TouchableOpacity>
                    }
                    {this.state.hide &&
                        <TouchableOpacity activeOpacity={0.8} disabled={this.state.disableinput} style={MainCss.footertouch}
                            onPress={this.clickinput.bind(this)}>
                            <Icon name="chevron-right" type="MaterialIcons" style={{ fontSize: 40, color: '#3f51b5' }} />
                        </TouchableOpacity>

                    }
                </Footer>
            </Container>
        );
    }
}
