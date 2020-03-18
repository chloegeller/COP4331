import * as React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import PDFReader from 'rn-pdf-reader-js'

class FlowchartScreen extends React.Component {
  static navigationOptions = {
      title: 'Documents',
      headerTintColor: '#ffffff',
      headerStyle: {
          backgroundColor: '#000000',
      }
  };

  render() {
    return (
      <View style = {{flex: 1, flexDirection: 'column'}}>
        <View style = {styles.header}>
          <View style = {styles.menuButton}>
            <Button
              onPress={() => this.props.navigation.navigate('Docs')}
              title="     Back     "
              color="#808080"
            />
          </View>
          <View style = {{flex:0.5}}>
          </View>
          <Text style = {styles.headerText}> Documents </Text>
          <View style = {{flex:0.5}}>
          </View>
          <View style = {styles.loginButton}>
            <Button
              onPress={() => this.props.navigation.navigate('LogIn')}
              title="     Log in     "
              color="#808080"
            />
          </View>
        </View>
        <View style = {styles.body}>
          <PDFReader
            source={{
              uri: 'http://www.cecs.ucf.edu/web/wp-content/uploads/2018/03/Override-Form-2018-NEW.pdf',
            }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  menuButton: {
    flex: 1,
  },
  headerText: {
    color: '#ffc904',
    fontSize: 32,
    fontWeight: 'bold',
  },
  loginButton: {
    flex: 1,
  },
  body: {
    flex: 8,
    flexDirection: 'column',
    backgroundColor: '#ba9b37'
  },
});

export default FlowchartScreen;
