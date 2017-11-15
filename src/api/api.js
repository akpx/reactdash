
var axios = require('axios');

export const getAllApp = () => {
      return axios({
        method:'get',
        url:' https://rink.hockeyapp.net/api/2/apps',
        headers: {'X-HockeyAppToken': '83745945720a4e658b8d2852c037a2a1'},      
      })
        .then(function(response) {
        return response.data;
      });
}

