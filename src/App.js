import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Animated } from 'react-native';

// const phw = Dimensions.get('window').width;
// const phh = Dimensions.get('window').height;

// const App = () => {
//     const [posh, setPosh] = useState(200)
//     const [posw, setPosw] = useState(200)


//     const [x, setX] = useState(Math.floor(Math.random() * (posw)))
//     const [y, setY] = useState(Math.floor(Math.random() * (phh - phw - 100)) + Math.floor(phw));

//     // const [x, setX] = useState(300)
//     // const [y, setY] = useState(500);

//     const position = new Animated.ValueXY({ x: x, y: y });


//     const startAnimation = (a, b) => {
//         console.log('hii')
//         Animated.timing(position, {
//             toValue: { x: a, y: b },
//             duration: 1000
//         }).start();
//     }

//     setTimeout(() => {
//         startAnimation(x, y);
//     }, 500)

//     const gameStart = () => {
//         if (posw - x < y) {
//             let t = posw - x;
//             setY(y - t);
//             setX(posw);

//             setTimeout(() => {
//                 // startAnimation(posw, y - t)
//                 first(posw, y - t);
//             }, 1000)
//         }
//     }

//     const first = (x, y) => {
//         if (y < posw) {
//             setX(posw - y);
//             setY(0);
//             setTimeout(() => {
//                 second(posw - y, 0);
//             }, 1000)
//         } else {
//             setX(0);
//             setY(y - posw);
//             setTimeout(() => {
//                 seventh(0, y - posw)
//             }, 1000)
//         }

//     }

//     const second = (x, y) => {
//         setX(0);
//         setY(x);
//         setTimeout(() => {
//             third(0, x);
//         }, 1000)
//     }

//     const third = (x, y) => {
//         if (posh - y < posw) {
//             setX(posh - y);
//             setY(posh)
//             setTimeout(() => {
//                 sixth(posh - y, posh);
//             }, 1000)
//         } else {
//             setX(posw);
//             setY(posw + y)
//             setTimeout(() => {
//                 fourth(posw, posw + y);
//             }, 1000)
//         }
//     }

//     //right ka down
//     const fourth = (x, y) => {
//         if (posh - y < posw) {
//             setX(posw - posh + y);
//             setY(posh);
//             setTimeout(() => {
//                 fifth(posw - posh + y, posh)
//             }, 1000)
//         } else {
//             setX(0);
//             setY(posw + y);
//             setTimeout(() => {
//                 third(0, posw + y);
//             }, 1000)
//         }
//     }

//     //neeche ka left
//     const fifth = (x, y) => {
//         setY(posh - x);
//         setX(0);
//         setTimeout(() => {
//             seventh(0, posh - x);
//         }, 1000)
//     }

//     //neeche ka right
//     const sixth = (x, y) => {
//         setY(posh - posw + x);
//         setX(posw)
//         setTimeout(() => {
//             first(posw, posh - posw + x)
//         }, 1000)
//     }

//     const seventh = (x, y) => {
//         if (y < posw) {
//             setX(y);
//             setY(0);
//             setTimeout(() => {
//                 eighth(y, 0)
//             }, 1000)
//         } else {
//             setX(posw);
//             setY(y - posw)
//             setTimeout(() => {
//                 first(posw, y - posw)
//             }, 1000)
//         }
//     }

//     const eighth = (x, y) => {
//         setX(posw);
//         setY(posw - x);
//         setTimeout(() => {
//             fourth(posw, posw - x);
//         }, 1000)
//     }

//     console.log(posh, posw, phw, phh)
//     return (
//         <View style={styles.container}>

//             <View onLayout={(event) => {
//                 var { x, y, width, height } = event.nativeEvent.layout;
//                 height = Math.floor(height);
//                 width = Math.floor(width)
//                 setPosh(height - 20)
//                 setPosw(width - 20)
//                 //  console.log("akkhil", x, y, width, height)
//             }} style={styles.playground}>
//                 <Animated.View style={[{
//                     left: position.x,
//                     top: position.y
//                 }, { flex: 1 }]}>
//                     <View style={[styles.ball, {
//                         //  marginTop: y,
//                         //marginLeft: x
//                     }]} />
//                     {/* <View style={styles.line} /> */}
//                     <View style={styles.bottomView}>
//                         <ScrollView horizontal={true}>
//                             <View style={{ width: 80, backgroundColor: '#00ff1a', height: 20, marginHorizontal: 30 }} />
//                         </ScrollView>
//                     </View>
//                 </Animated.View>
//             </View>
//             <View style={{ alignItems: 'center', marginTop: 5 }}>
//                 <TouchableOpacity
//                     onPress={() => {
//                         gameStart()
//                         // startAnimation(posw - 20, posh - 39)
//                     }}
//                     style={{ alignItems: 'center', backgroundColor: 'gray', width: 50, height: 25, justifyContent: 'center' }}>
//                     <Text>start</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         borderWidth: 5,
//         borderColor: '#cc0000',
//         width: phw,
//         flex: 1,
//         // borderBottomColor: '#404040',
//         backgroundColor: 'yellow'
//     },
//     playground: {
//         height: '95%',
//         backgroundColor: '#404040'
//     },
//     ball: {
//         backgroundColor: 'white',
//         height: 20,
//         width: 20,
//         borderRadius: 100,

//     },
//     line: {
//         borderWidth: 2,
//         borderColor: 'green',

//     },
//     bottomView: {
//         width: '100%',
//         backgroundColor: '#404040',
//         position: 'absolute', //Here is the trick
//         bottom: 0, //Here is the trick
//     }
// })

// export default App;
const App = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, backgroundColor: '#404040' }}>
            <View style={{ alignItems: 'center', height: 240, width: 40, backgroundColor: 'black', marginTop: -200, borderTopRightRadius: 30, borderTopLeftRadius: 30 }} >
                <View style={{ backgroundColor: 'lightgray', height: 20, width: 20, marginTop: 25, borderRadius: 20 }} />
            </View>
            <View style={{
                borderWidth: 10,
                borderRadius: 10,
                padding: 15,
                backgroundColor: 'lightgray',
            }}>
                <Text style={{ fontSize: 40, color: '#404040', fontWeight: 'bold', fontFamily: 'roboto', textAlign: 'center' }}>
                    Balance The Ball
            </Text>
            </View>

            <TouchableOpacity
                onPress={() => {
                    props.startGame(false)
                }}
                style={{ borderColor: 'black', borderWidth: 5, position: 'absolute', bottom: 0, marginBottom: 50, backgroundColor: 'lightgray', paddingHorizontal: 25, paddingVertical: 5, borderRadius: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Play</Text>
            </TouchableOpacity>

        </View>
    );
}

export default App;