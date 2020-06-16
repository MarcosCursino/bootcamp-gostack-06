import React, {Component} from 'react';
import {View} from 'react-native';

// import { Container } from './styles';

export default class User extends Component {
  static navigationOptions = ({route}) => ({
    title: route.params.user,
  });

  async componentDidMount() {}

  render() {
    return <View />;
  }
}
