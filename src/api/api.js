
var axios = require('axios');

export const getAllApp = () => {
      return axios({
        method:'get',
        url:' https://rink.hockeyapp.net/api/2/apps',
        headers: {'X-HockeyAppToken': ''},      
      })
        .then(function(response) {
        return response.data;
      });
}

