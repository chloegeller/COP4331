import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Button, TouchableOpacity } from 'react-native';

class BusRoutesOn extends React.Component {
    static navigationOptions = {
        title: 'On Campus Routes',
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
                            title="  Back  "
                            color="#808080"
                        />

                    
                    <View style={{ flex: 15 }}>
                    </View>

                    </View>

                <Text style={{ fontSize: 30, color: 'black', textAlign: 'left' }}>
                    On Campus Stops

                </Text>
                <Text style={{ fontSize: 5, color: 'black', textAlign: 'left' }}>
                    {"\n"}

                </Text>
                <Text style={{ fontSize: 15, color: 'black', textAlign: 'left' }}>
                    Spring/Fall Hours: 7am - 7pm  {"\n"}
                    Summer Hours:     7am - 4pm  {"\n"}

                </Text>

                <Text style={{ fontSize: 12, color: 'black', textAlign: 'left' }}>

                    .  1: Student Union                                       2 : Lake Claire Community{"\n"}
                    .  3: Addition Arena/Towers                       4 : Engineering/Business{"\n"}
                    .  5: Physical Sciences/Health Center      6 : Student Dorms{"\n"}
                    .  7: Ferrell Commons/RWC                       8 : Student Dorms{"\n"}
                    .  9: Library/Apollo Community               10 : Teaching Academy{"\n"}
                    .11: Lynx Transit Center
                    {"\n"}
                </Text>
                <Image style={styles.logo} source={require('../assets/shuttlemaps18.png')} />
                <View style={{ flex: 1 }}>
                </View>



                
                    
                
                </View>

        );
    }
}

const styles = StyleSheet.create({
    
    logo: {
        height: 340,
        width: 360,
        alignItems: 'center',
    }
});



export default BusRoutesOn;