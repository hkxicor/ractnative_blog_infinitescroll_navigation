import React, { Component } from 'react';
import { ScrollView,View,TouchableHighlight } from 'react-native';
import { blogs } from '../data/blogs.json';
import BlogCard from './BlogCard';

export default class BlogList extends Component {
  static navigationOptions = {
    title: 'Blog List',
  };
  constructor(props){
    super(props);
    this.state = {
      blogs: blogs
    }

  }

  render() {
    const { navigate } = this.props.navigation;
    return (<View>
              <ScrollView
                onScroll={({nativeEvent}) => {
                if (isCloseToBottom(nativeEvent)) {
                  this.setState({blogs: this.state.blogs.concat(blogs)})
                }
              }}>
                {
                  this.state.blogs.map((item, index) => (
                    <BlogCard navigation={this.props.navigation} id={item.id} Title={item.title} Body={item.body} TimeStamp={item.time_stamp} key={index} />
                  ))
                }
              </ScrollView>
          </View>
          )
  }
}
const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
return layoutMeasurement.height + contentOffset.y >=
  contentSize.height - paddingToBottom;
};
