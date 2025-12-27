/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

/*
PREP

Params: A string (a URL)
Returns: just the domain name
Example: url = "http://github.com/carbonfive/raygun" -> domain name = "github"
Plan:
- replace http:// with ''
- replace www with ''
- replace http://www with ''
- split string at '.'
- return [0]
*/

function domainName(url){
    url = url.replace('http://', '')
    url = url.replace('www.', '')
    url = url.replace('https://', '')
    return url.split('.')[0]
  }
  
  