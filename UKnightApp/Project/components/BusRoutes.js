import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Button, TouchableOpacity } from 'react-native';

class BusRoutes extends React.Component {
    static navigationOptions = {
        title: 'Bus Routes',
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: '#000000',
        },
        headerRight: () => (
            <Button
                onPress={() => alert('This will bring you to a log in screen once have one.')}
                title="Log in"
                color="#808080"
            />
        )
    };

    render() {
        return (

          

            <View style={styles.container1}>
                {/* <Text style={styles.heading}>UKnight</Text> */}
                {/* <View style={styles.container2}> */}
                <Image style={styles.logo} source={require('../assets/shuttlemaps18.png')} />
                <Text style={{ fontSize: 30,color: 'gold',textAlign: 'left' }}>
                    On Campus Stops  {"\n"}
                    
                </Text>
                <Text style={{ fontSize: 20, color: 'red', textAlign: 'left' }}>
                    
                    1: Student Union                        2 : Lake Claire Community{"\n"}
                    3: Addition Arena/Towers                4 : Engineering/Business{"\n"}
                    5: Physical Sciences/Health Center      6 : Student Dorms{"\n"}
                    7: Ferrell Commons/RWC                  8 : Student Dorms{"\n"}
                    9: Library/Apollo Community             10 : Teaching Academy{"\n"}
                    11: Lynx Transit Center
                </Text>
                
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#283747',
        
        padding: 30,
    },

    logo: {
        height: 485,
        width: 540,
        
    }
});

export default BusRoutes;