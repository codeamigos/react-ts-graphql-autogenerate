/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type FeedQuery = {
  // A feed of repository submissions
  feed:  Array< {
    // Information about the repository from GitHub
    repository:  {
      // Just the name of the repository, e.g. GitHunt-API
      name: string,
      // The owner of this repository on GitHub, e.g. apollostack
      owner:  {
        // The name of the user, e.g. apollostack
        login: string,
      } | null,
    } | null,
    // The GitHub user who submitted this entry
    postedBy:  {
      // The name of the user, e.g. apollostack
      login: string,
    } | null,
  } > | null,
};

export type FeedAuthorFragment = {
  // The name of the user, e.g. apollostack
  login: string,
};

export type FeedRepoFragment = {
  // Just the name of the repository, e.g. GitHunt-API
  name: string,
  // The owner of this repository on GitHub, e.g. apollostack
  owner:  {
    // The name of the user, e.g. apollostack
    login: string,
  } | null,
};
/* tslint:enable */
