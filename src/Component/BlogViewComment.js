import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,TouchableHighlight } from 'react-native';
import CommentList from './CommentList';

export default class BlogViewComment extends Component {
  constructor(props){
    super(props)
    this.state = {
      text:''
    }
  }
  renderComments(comments){
    return comments.map((item,index)=>{
      return (
        <CommentList by={item.by} data={item.data} likes={item.likes}>
          {
            this.renderComments(item.comments)
          }
        </CommentList>
      )
    })
  }
  render(){
    const { Comments, displayComments } = this.props;
    if(!displayComments){
      return (<View></View>)
    }
    return (
      <View style={styles.container}>
        <Text style={{marginBottom:10}}>Comment Section</Text>
        <TextInput
          style={styles.input}
          value={this.state.text}
          onChange={(e)=> this.setState({...this.state,text:e.target.value})}
          editable={true}
          maxLength={40}/>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableHighlight onPress={()=> {alert("Comment Submitted");this.setState({...this.state,text:''})  }} style={styles.button}><Text style={styles.buttonText}>Submit</Text></TouchableHighlight>
         </View>
         <Text style={{marginBottom:20}}>Comments</Text>
         {
            this.renderComments(Comments)
         }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop:20,
    marginBottom:30
  },
  input:{
    borderWidth:.5,
    height:100,
    borderColor:'#000'
  },
  button:{
    width:100
  },
  buttonText:{
    fontSize:20,
    fontWeight:'400'
  }
})
