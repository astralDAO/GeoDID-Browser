import gql from 'graphql-tag';

export default gql`
  query($where: GeoDID_filter!) {
    geoDIDs(where: $where) {
      id
      owner
      cid
      storage
      root
      isRoot
      parent
      edges {
        id
        active
        childGeoDID {
          id
          owner
          cid
          storage
          root
          isRoot
          parent
          active
          type
          edges {
            id
            active
            childGeoDID {
              id
              type
            }
          }
        }
      }
      active
      type
      errors
      bytes32hash
      bytes32hashWithQM
    }
  }
`;
