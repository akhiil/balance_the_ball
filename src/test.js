
import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Animated, LogBox, Modal } from 'react-native';

const phw = Dimensions.get('window').width;
const phh = Dimensions.get('window').height;
const darkColor = '#404040'
const lightColor = '#f0f0f0'

export default class App extends Component {
    state = {
        posh: 200,
        posw: 200,
        x: Math.floor(Math.random() * (phw - 31)),
        y: Math.floor(Math.random() * (phh - phw - 130)) + Math.floor(phw),
        slider: 0,
        score: 0,
        dark: true,
        showModal: false
        // x: 200,
        // y: 676
    }

    componentWillMount() {
        this.position = new Animated.ValueXY({ x: this.state.x, y: this.state.y });
        // console.log("akhiil", this.state.posw, this.state.posh);
    }

    componentDidMount() {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }



    startAnimation = (a, b, x, y) => {
        let h = a - x
        let l = b - y
        let d = Math.sqrt((h * h) + (l * l)) * 1.5;
        let t = Math.floor(d / 200)
        console.log("akhilesh", t, d)
        Animated.timing(this.position, {
            toValue: { x: a, y: b },
            duration: Math.floor(d)
        }).start();
    }

    gameStart = async () => {
        this.setState({ score: 0 })
        let x = this.state.x
        let y = this.state.y
        console.log(this.state.posw, x, y);
        if (this.state.posw - x < y) {
            // console.log("hii there")

            let t = this.state.posw - x;
            this.setState({ x: this.state.posw, y: y - t })
            // setY(y - t);
            // setX(posw);
            this.startAnimation(this.state.posw, y - t, x, y)
            let h = x - this.state.posw
            let l = t
            let d = Math.sqrt((h * h) + (l * l)) * 1.5;
            setTimeout(() => {
                this.first(this.state.posw, y - t);
            }, d + 10)
        }
    }

    first = (x, y) => {

        if (y < this.state.posw) {
            this.setState({ score: this.state.score + 1 })
            this.setState({ x: this.state.posw - y, y: 0 })
            // setX(this.state.posw - y);
            // setY(0);
            this.startAnimation(this.state.posw - y, 0, x, y)
            let h = x - this.state.posw - y
            let l = y
            let d = Math.sqrt((h * h) + (l * l)) * 1.5;
            setTimeout(() => {
                this.second(this.state.posw - y, 0);
            }, d + 10)
        } else {
            this.setState({ score: this.state.score + 1 })
            this.setState({ x: 0, y: y - this.state.posw });
            // setX(0);
            // setY(y - posw);
            this.startAnimation(0, y - this.state.posw, x, y)
            let h = x
            let l = y - (y - this.state.posw)
            let d = Math.sqrt((h * h) + (l * l)) * 1.5;
            setTimeout(() => {
                this.seventh(0, y - this.state.posw)
            }, d + 10)
        }

    }

    second = (x, y) => {
        this.setState({ x: 0, y: x })
        this.setState({ score: this.state.score + 1 })
        // setX(0);
        // setY(x);
        this.startAnimation(0, x, x, y)
        let h = x
        let l = y - x
        let d = Math.sqrt((h * h) + (l * l)) * 1.5;
        setTimeout(() => {
            this.third(0, x);
        }, d + 10)
    }

    third = (x, y) => {
        if (this.state.posh - y < this.state.posw) {
            this.setState({ score: this.state.score + 1 })
            this.setState({ x: this.state.posh - y, y: this.state.posh })
            // setX(posh - y);
            // setY(posh)
            this.startAnimation(this.state.posh - y, this.state.posh, x, y)
            let h = x - (this.state.posh - y)
            let l = y - (this.state.posh)
            let d = Math.sqrt((h * h) + (l * l)) * 1.5;
            setTimeout(() => {
                this.sixth(this.state.posh - y, this.state.posh);
            }, d + 10)
        } else {
            this.setState({ score: this.state.score + 1 })
            this.setState({ x: this.state.posw, y: this.state.posw + y })
            // setX(this.state.posw);
            // setY(this.state.posw + y)
            this.startAnimation(this.state.posw, this.state.posw + y, x, y)
            let h = x - (this.state.posw)
            let l = y - (this.state.posh)
            let d = Math.sqrt((h * h) + (l * l)) * 1.5;
            setTimeout(() => {
                this.fourth(this.state.posw, this.state.posw + y);
            }, d + 10)
        }
    }

    //right ka down
    fourth = (x, y) => {
        if (this.state.posh - y < this.state.posw) {
            this.setState({ score: this.state.score + 1 })
            this.setState({ x: this.state.posw - this.state.posh + y, y: this.state.posh })
            // setX(posw - posh + y);
            // setY(posh);
            this.startAnimation(this.state.posw - this.state.posh + y, this.state.posh, x, y)
            let h = x - (this.state.posw - this.state.posh + y)
            let l = y - (this.state.posh)
            let d = Math.sqrt((h * h) + (l * l)) * 1.5;
            setTimeout(() => {
                this.fifth(this.state.posw - this.state.posh + y, this.state.posh)
            }, d + 10)
        } else {
            this.setState({ score: this.state.score + 1 })
            this.setState({ x: 0, y: this.state.posw + y })
            // setX(0);
            // setY(this.state.posw + y);
            this.startAnimation(0, this.state.posw + y, x, y)
            let h = x
            let l = y - (this.state.posw)
            let d = Math.sqrt((h * h) + (l * l)) * 1.5;
            setTimeout(() => {
                this.third(0, this.state.posw + y);
            }, d + 220)
        }
    }

    //neeche ka left
    fifth = (x, y) => {
        let posh = this.state.posh
        let posw = this.state.posw
        let temp = this.state.posw - this.state.x - 20;
        if (temp - this.state.slider <= 60 && (temp - this.state.slider) > -20) {
            this.setState({ score: this.state.score + 1 })
            this.setState({ x: 0, y: posh - x })
            // setY(posh - x);
            // setX(0);
            this.startAnimation(0, posh - x, x, y)
            let h = x - (0)
            let l = y - (posh - x)
            let d = Math.sqrt((h * h) + (l * l)) * 1.5;
            setTimeout(() => {
                this.seventh(0, posh - x);
            }, d + 10)
        } else {
            this.setState({ showModal: true })
        }
    }

    //neeche ka right
    sixth = (x, y) => {
        let posh = this.state.posh
        let posw = this.state.posw
        let temp = this.state.posw - this.state.x - 20;
        if (temp - this.state.slider <= 50 && (temp - this.state.slider) > -20) {
            this.setState({ score: this.state.score + 1 })
            this.setState({ x: posw, y: posh - posw + x })
            // setY(posh - posw + x);
            // setX(posw)
            this.startAnimation(posw, posh - posw + x, x, y)
            let h = x - (posw)
            let l = y - (posh - posw + x)
            let d = Math.sqrt((h * h) + (l * l)) * 1.5;
            setTimeout(() => {
                this.first(posw, posh - posw + x)
            }, d + 10)
        } else {
            this.setState({ showModal: true })
        }
    }

    seventh = (x, y) => {
        let posh = this.state.posh
        let posw = this.state.posw
        if (y < posw) {
            this.setState({ score: this.state.score + 1 })
            this.setState({ x: y, y: 0 })
            // setX(y);
            // setY(0);
            this.startAnimation(y, 0, x, y)
            let h = x - (y)
            let l = y - (0)
            let d = Math.sqrt((h * h) + (l * l)) * 1.5;
            setTimeout(() => {
                this.eighth(y, 0)
            }, d + 10)
        } else {
            this.setState({ score: this.state.score + 1 })
            this.setState({ x: posw, y: y - posw })
            // setX(posw);
            // setY(y - posw)
            this.startAnimation(posw, y - posw, x, y)
            let h = x - (posw)
            let l = y - (y - posw)
            let d = Math.sqrt((h * h) + (l * l)) * 1.5;
            setTimeout(() => {
                this.first(posw, y - posw)
            }, d + 10)
        }
    }

    eighth = (x, y) => {
        this.setState({ score: this.state.score + 1 })
        let posh = this.state.posh
        let posw = this.state.posw
        this.setState({ x: posw, y: posw - x })
        // setX(posw);
        // setY(posw - x);
        this.startAnimation(posw, posw - x, x, y)
        let h = x - (posw)
        let l = y - (posw - x)
        let d = Math.sqrt((h * h) + (l * l)) * 1.5;
        setTimeout(() => {
            this.fourth(posw, posw - x);
        }, d + 10)
    }

    // console.log(x, y)
    render() {
        console.log(this.state.x, this.state.y, this.state.slider, this.state.posw, this.state.posh)
        return (
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <View style={{ marginTop: 14, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        onPress={() => {
                            this.gameStart();
                        }}
                        style={{ justifyContent: 'center', height: 30, alignItems: 'center', backgroundColor: '#a69000', paddingHorizontal: 10, marginLeft: 10, borderRadius: 5 }}>
                        <Text style={{ color: 'white', fontSize: 16, }}>Start</Text>
                    </TouchableOpacity>
                    <View><Text style={{ color: '#a69000', fontSize: 20 }}>Score: {this.state.score}</Text></View>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({ dark: !this.state.dark })
                        }}
                        style={styles.mode}>
                        <Text style={{ fontSize: 16, color: !this.state.dark ? darkColor : lightColor }}>Theme</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.container, {
                    backgroundColor: this.state.dark ? darkColor : lightColor,
                    borderBottomColor: 'black'
                }]}>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.showModal}
                    >
                        <View style={{
                            width: '80%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'lightgray',
                            marginTop: '30%',
                            padding: 20,
                            borderRadius: 10,
                            marginLeft: '10%'
                        }}>
                            <Text style={{ fontSize: 20 }}>Game Over !!</Text>
                            <Text style={{ fontSize: 20 }}>your score is {this.state.score}</Text>
                            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                                <TouchableOpacity
                                    style={{ marginHorizontal: 30, paddingHorizontal: 20, paddingVertical: 4, backgroundColor: 'black', borderRadius: 10, }}
                                    onPress={() => {
                                        this.setState({ showModal: false })
                                        this.gameStart()
                                    }}>
                                    <Text style={{ fontSize: 18, color: '#a68000', fontWeight: 'bold' }}>play</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ marginHorizontal: 30, paddingHorizontal: 20, paddingVertical: 4, backgroundColor: 'black', borderRadius: 10 }}
                                    onPress={() => this.setState({ showModal: false })}>
                                    <Text style={{ fontSize: 18, color: '#a68000', fontWeight: 'bold' }}>cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                    <View onLayout={(event) => {
                        var { x, y, width, height } = event.nativeEvent.layout;
                        height = Math.floor(height);
                        width = Math.floor(width)
                        this.setState({ posh: height - 20, posw: width - 20, })
                        //  console.log("akkhil", x, y, width, height)
                    }} style={[styles.playground, { backgroundColor: this.state.dark ? darkColor : lightColor }]}>
                        <Animated.View style={[this.position.getLayout(), { flex: 1 }]}>
                            <View style={[styles.ball, {
                                // marginTop: this.state.y,
                                // marginLeft: this.state.x
                            }]} />
                            {/* <View style={styles.line} /> */}

                        </Animated.View>

                    </View>
                    <View style={{ backgroundColor: this.state.dark ? darkColor : lightColor }}>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            onScroll={(event) => {
                                this.setState({ slider: event.nativeEvent.contentOffset.x })
                                //  console.log(event.nativeEvent.contentOffset.x);
                            }}
                            horizontal={true}>
                            <View style={{ backgroundColor: '#404040', marginRight: this.state.posw - 62 }} />
                            <View style={{
                                width: 80,
                                backgroundColor: 'black',
                                height: 32,
                                borderRadius: 5,
                                alignItems: 'center',
                                color: 'white'
                            }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#a69000' }}>◀ - ▶</Text>
                            </View>
                            <View style={{ backgroundColor: '#404040', marginLeft: this.state.posw - 62 }} />
                        </ScrollView>
                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 10,
        borderColor: 'black',
        width: '100%',
        flex: 1,
        // borderBottomColor: '#404040',

        borderRadius: 20,
        borderBottomEndRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomWidth: 10
    },
    playground: {
        height: '95%',
        borderRadius: 15
    },
    ball: {
        backgroundColor: '#a69000',
        height: 20,
        width: 20,
        borderRadius: 100,

    },
    line: {
        borderWidth: 2,
        borderColor: 'green',

    },
    bottomView: {
        width: '100%',
        backgroundColor: '#404040',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
    mode: {
        backgroundColor: '#a69000',
        justifyContent: 'center',
        paddingHorizontal: 5,
        borderRadius: 5
    }
})