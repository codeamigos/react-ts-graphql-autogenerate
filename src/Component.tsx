import * as React from 'react'
import { graphql, ChildProps } from 'react-apollo'
import { FeedQuery } from './schema'
// const graphqlDocuments = require('./documents.json')
import * as graphqlDocuments from './documents.json'

class Component extends React.PureComponent<ChildProps<{}, FeedQuery>> {
  constructor(props: ChildProps<{}, FeedQuery>) {
    super(props)
  }

  render() {
    const { data } = this.props

    if (!data) return null
    if (data.error) return <div>Something really bad is happened</div>
    if (data.loading) return <div>Loading</div>

    if (data.feed)
      return (
        <div>
          {data.feed.map((f, i) =>
            <div key={i}>
              {f.postedBy && f.postedBy.login}
              <br />
              {f.repository && f.repository.name}
              <br />
              <br />
            </div>
          )}
        </div>
      )

    return <div>hi bithces!</div>
  }
}

export default graphql<FeedQuery, {}>(graphqlDocuments['Feed.graphql'])(Component)
