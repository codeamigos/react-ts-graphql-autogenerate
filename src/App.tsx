import * as React from 'react'
import { ApolloClient, ApolloProvider } from 'react-apollo'
import Component from './Component'

const client = new ApolloClient()

export default class App extends React.Component<{}> {
  render() {
    return (
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
    )
  }
}
