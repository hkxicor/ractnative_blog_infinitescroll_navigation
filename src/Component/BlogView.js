import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BlogViewComment from './BlogViewComment';

export default class BlogView extends Component {
  constructor(props){
    super(props)
    this.state = {
      Comments:this.props.navigation.state.params.Comments,
      displayComments:false
    }
  }
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.Title,
  })
  render() {
    const { Title, TimeStamp, Body} = this.props;
    const { params } = this.props.navigation.state;

    return (<ScrollView
      style={styles.container}
      onScroll={({nativeEvent}) => {
      if (isCloseToBottom(nativeEvent)) {
        if(!this.state.displayComments){
          this.setState({...this.state,displayComments:true})
        }
        this.setState({Comments: this.state.Comments.concat(this.props.navigation.state.params.Comments)})
      }
    }}>
              <Text style={styles.title}>{params.Title}</Text>
              <Text style={styles.timeStamp}>{params.TimeStamp}</Text>
              <Text style={styles.body}>{params.Body}</Text>
              <BlogViewComment displayComments={this.state.displayComments} Comments={this.state.Comments}/>
            </ScrollView>)
  }
}
const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
return layoutMeasurement.height + contentOffset.y >=
  contentSize.height - paddingToBottom;
};


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
