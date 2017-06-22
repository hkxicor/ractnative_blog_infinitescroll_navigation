import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class BlogView extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.Title,
  })
  render() {
    const { Title, TimeStamp, Body} = this.props;
    const { params } = this.props.navigation.state;

    return (<View style={styles.container}>
              <Text style={styles.title}>{params.Title}</Text>
              <Text style={styles.timeStamp}>{params.TimeStamp}</Text>
              <Text style={styles.body}>{params.Body}</Text>
            </View>)
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    padding:10
  },
  title:{
    fontSize:25,
    fontWeight:'bold'
  },
  timeStamp:{
    fontSize:15,
    fontWeight:'100'
  },
  body:{
    fontSize:20,
    marginTop:20
  }
})
