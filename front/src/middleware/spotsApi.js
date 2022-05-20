//= import 
// npm
import axios from 'axios';
import { useSelector } from 'react-redux';

// local
import { FETCH_SPOTS, saveSpots } from '../actions/spots';


const axiosInstance = axios.create({
   // API url
   baseURL: 'http://0.0.0.0:8080/',
});


const spotApiMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  const token =  state.users.tokenCurrentUser;
  console.log(token);
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
      
  switch (action.type) {
    case FETCH_SPOTS:
      
      console.log(token);
      axiosInstance
        .get('api/admin/spots')
        .then(
          (resp) => {
            console.log(resp.data)
            
            store.dispatch(saveSpots(resp.data))
          }
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    
      default:
      next(action);
  }
};

export default spotApiMiddleware;