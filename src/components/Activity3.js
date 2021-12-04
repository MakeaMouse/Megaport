
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var http = {};
http.sendQuest = function (option, callback) {
  var url = option.url;
  var method = option.method;
  var data = option.data;
  var timeout = option.timeout || 0;
  var xhr = new XMLHttpRequest();
  (timeout > 0) && (xhr.timeout = timeout);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 400) {
        var result = xhr.responseText;
        try { result = JSON.parse(xhr.responseText); } catch (e) { 
            console.log(e);
        }
        callback && callback(null, result);
      } else {
        callback && callback('status: ' + xhr.status);
      }
    }
  }.bind(this);
  xhr.open(method, url, true);
  if (typeof data === 'object') {
    try {
      data = JSON.stringify(data);
    } catch (e) { 
        console.log(e);
    }
  }
  xhr.send(data);
  xhr.ontimeout = function () {
    callback && callback('timeout');
    console.log('Connection Timeout!');
  };
};
http.get = function (url, callback) {
  var option = url.url ? url : { url: url };
  option.method = 'get';
  this.sendQuest(option, callback);
};
http.post = function (option, callback) {
  option.method = 'post';
  this.sendQuest(option, callback);
};


http.get({ url: 'https://api.megaport.com/v2/locations', timeout: 5000 }, function (err, result) {
    if(result) {
        console.log(result);
    } else if (err) {
        console.log(err);
    }
});

