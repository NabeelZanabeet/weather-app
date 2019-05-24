import React from 'react';
import { Text, AppRegistry } from 'react-native';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    // this.setState({ hasError: true });
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Text> Something went wrong. </Text>;
    }
    return this.props.children;
  }
}

AppRegistry.registerComponent('ErrorBoundary', () => ErrorBoundary);
