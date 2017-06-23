import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';


export default class CommentList extends Component {
  render(){
    const { by, data, likes } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.commentBy}>{by}</Text>
        <View style={{flex:1,flexDirection: 'row'}}>
            <Text style={{flex:1}}>{likes} Like(s)</Text>
            <TouchableHighlight onPress={()=>alert("Comment Liked")} style={{width:50}}><Text>Like</Text></TouchableHighlight>
        </View>
        <Text style={styles.commentBody}>{data}</Text>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop:10,
    borderWidth:1,
    borderColor:'#333',
    padding:5
  },
  commentBy:{
    fontWeight:'bold'
  },
  commentBody:{
    fontSize:15,
    fontWeight:'300'
  },
})
