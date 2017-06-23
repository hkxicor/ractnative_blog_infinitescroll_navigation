import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import truncate from 'lodash/truncate';

export default class BlogCard extends Component {
	constructor(props){
		super(props);
		this.state = {}
	}
	render(){
		const { Title, TimeStamp, Body, Comments} = this.props;
		const { navigate } = this.props.navigation;
		return (
			<TouchableHighlight onPress={ ()=>  navigate('BlogView',{ Title, TimeStamp, Body, Comments}) }>
			<View style={styles.container} >
                <Text style={styles.title}>{Title}</Text>
                <Text>{TimeStamp}</Text>
                <Text style={styles.body}>{truncate(Body,{'length':250,'separator': ' '})}</Text>
      </View>
			</TouchableHighlight>
            )
	}
}

const styles = StyleSheet.create({
	container: {
		padding:10,
	    backgroundColor:'#fff',
	    marginBottom:5,
	},
	title: {
		fontSize:20,
		fontWeight:'bold'
	},
	body: {
		fontSize:15,
		color:'#333',
		marginTop:5
	}
})
