import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Button, TouchableOpacity } from 'react-native';

class BusRoutesOff extends React.Component {
    static navigationOptions = {
        title: 'Off Campus Routes',
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: '#000000',
        },

    };

    render() {
        return (

            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ba9b37' }}>
                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <Button
                        onPress={() => this.props.navigation.navigate('BusScreen')}
                        title="Back"
                        color="#808080"
                    />


                    <View style={{ flex: 15 }}>
                    </View>

                </View>

                <Text style={{ fontSize: 30, color: 'black', textAlign: 'left' }}>
                    Off Campus Routes

                </Text>
                <Text style={{ fontSize: 5, color: 'black', textAlign: 'left' }}>
                    {"\n"}

                </Text>
                <Text style={{ fontSize: 20, color: 'black', textAlign: 'left' }}>
                    Hours: 6:30am - 10pm


                </Text>
                <Text style={{ fontSize: 15, color: 'black', textAlign: 'left' }}>

                    Shuttles conclude at 8pm on Fridays{"\n"}

                </Text>

                <Text style={{ fontSize: 15, color: 'black', textAlign: 'left' }}>
                    Student Union Routes{"\n"}

                    .   1: Knights Circle {"\n"}
                    {"\n"}

                    Millican Hall Routes{"\n"}
                    .   2: College Station/Boardwalk{"\n"}
                    .   4: Engineering/Business{"\n"}
                    .   7: Ferrell Commons/RWC{"\n"}
                    . 12: Student Dorms{"\n"}
                    {"\n"}

                    Transit Center Routes{"\n"}
                    .   3: The Verge/The Place at Alafaya{"\n"}
                    . 10: The Lofts/Orion on Orpington{"\n"}
                    . 11: The MArquee{"\n"}
                    . 14: Plaza on University{"\n"}
                    . 15: Collegiate Village Inn/Arden Villas{"\n"}
                    {"\n"}

                    Health Center Routes{"\n"}
                    .   5: Village of Science Drive/Research Pavilion{"\n"}
                    .   9: Knights Landing/Research Park Stops{"\n"}
                    {"\n"}

                    HPA Routes{"\n"}
                    .   6: Northgate Lates/Tivoli{"\n"}
                    .   8: Riverwind at Alafaya/The Station{"\n"}
                    . 13: NorthView{"\n"}

                </Text>

                <View style={{ flex: 1 }}>
                </View>






            </View>

        );
    }
}


export default BusRoutesOff;
