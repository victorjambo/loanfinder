var unirest = require('unirest');

var req = unirest('GET', 'https://apk-downloader1.p.rapidapi.com/');

req.query({
  id: 'com.mutaidev.bbi',
});

req.headers({
  'x-rapidapi-host': 'apk-downloader1.p.rapidapi.com',
  'x-rapidapi-key': '9c97268d8cmshb7131cbfe816301p11326djsna400d1fa3663',
  androidid: '',
  country: 'us',
  lang: 'en',
  useragent:
    'Android-Finsky/14.3.18-all (versionCode=81431800,sdk=19,device=hammerhead,hardware=hammerhead,product=hammerhead,build=KTU84P:user)',
  password: '',
  username: '',
});

req.end(function(res) {
  if (res.error) {
    throw new Error(res.error);
  }

  console.log(res.body);
});
