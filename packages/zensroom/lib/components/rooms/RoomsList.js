import React from 'react';
import { Components, withList, withCurrentUser, Loading } from 'meteor/vulcan:core';
import Button from 'react-bootstrap/lib/Button';

import Rooms from '../../modules/rooms/collection';
import RoomsItem from './RoomsItem';
import RoomsNewForm from './RoomsNewForm';

const RoomsList = ({results = [], currentUser, loading, loadMore, count, totalCount}) => 
  
  <div style={{maxWidth: '600px', margin: '20px auto'}}>

    <div style={{padding: '20px 0', marginBottom: '20px', borderBottom: '1px solid #ccc'}}>
    
      <Components.AccountsLoginForm />
    
    </div>

    {loading ? 

      <Loading /> :

      <div className="rooms">
        
        <div style={{marginBottom: 20}}>
          <Components.ModalTrigger label="New Room" component={<Button bsStyle="primary">New Room</Button>}>
            <RoomsNewForm />
          </Components.ModalTrigger>
        </div>

        {results.map(room => <RoomsItem key={room._id} room={room} currentUser={currentUser} />)}
        
        {totalCount > results.length ?
          <a href="#" onClick={e => {e.preventDefault(); loadMore();}}>Load More ({count}/{totalCount})</a> : 
          <p>No more items.</p>
        }

      </div>
    }

  </div>

const options = {
  collection: Rooms,
  limit: 5
};

export default withList(options)(withCurrentUser(RoomsList));