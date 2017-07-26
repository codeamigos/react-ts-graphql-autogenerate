declare module '*.json' {
  import { DocumentNode } from 'graphql'

  export interface GraphqlDocuments {
    [key: string]: DocumentNode
  }
  export const value: GraphqlDocuments
}
