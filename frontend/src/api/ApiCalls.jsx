import axios from 'axios';
// Base Url
const base_url="http://127.0.0.1:3000/api/v1";

export const fetchData = async (url) => {
    try {
      const response = await axios.get(base_url+url);
      return response.data['data'];
    } catch (error) {
        console.error(error);
        if (error.response) {
            throw new Error(error);
        } else if (error.request) {
            throw new Error('Network Error');
        } else {
            throw new Error('Something went wrong');
        }
    }
  };

  export const postData = async (url,post_data) => {
    post_data=JSON.stringify(post_data)

    try {
      const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
      const response = await axios.post(base_url+url,post_data,config);
      console.log(response.data)
      return response.data;
    } catch (error) {
        console.error(error);
        if (error.response) {
            throw new Error(error.response.data['message']);
            
        } else if (error.request) {
            throw new Error('Network Error');
        } else {
            throw new Error('Something went wrong');
        }
    }
  };

  export default {
    fetchData,
    postData
  };
