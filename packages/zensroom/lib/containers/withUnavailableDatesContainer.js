/*

Container for the UnavailableDates query

http://docs.vulcanjs.org/data-loading.html#Higher-Order-Components

*/

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
  query unavailableDates($roomId: String) {
    UnavailableDates(roomId:$roomId)
  }
`

const withUnavailableDates = graphql(query, {

  alias: 'withUnavailableDates',
  
  options({room}) {
    return {
      variables: {
        roomId: room._id,
      },
    };
  },
  
  props({ data }) {
    return {
      loading: data.networkStatus === 1,
      unavailableDates: data.UnavailableDates
    }
  }

});

export default withUnavailableDates;


