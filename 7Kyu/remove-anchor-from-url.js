// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

/*
PREP

Parameters: A string, a url
Returns: the string, but everything after and including '#' should be removed
Example: 'www.codewars.com/katas/?page=1#about' // 'www.codewars.com/katas/?page=1'
Psuedo Code:
  function removeUrlAnchor (url):      
      url = url.split('#')
      return url[0]  
*/

function removeUrlAnchor(url) {
    return url.split('#')[0];
  }