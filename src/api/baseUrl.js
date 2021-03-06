export default function getBaseUrl() {
    // Check if home url is like: "localhost:3000?useMockApi=true"
    return getQueryStringParameterByName('useMockApi') ? 
    'http://localhost:3001/' : 'https://frozen-river-80172.herokuapp.com/';
  }
  
  function getQueryStringParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }