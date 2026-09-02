/*
  This is a CloudFront function to enforce the following rules:
  1. All routes should end with a trailing slash unless requesting a file
  2. All routes should be lowercase, with the exception of the filename
  3. If a route does not have a trailing slash, redirect to the same route with a trailing slash
  4. Ensure that query strings are preserved when redirecting

  This function should be attached to the "Viewer Request" event of the CloudFront distribution.
*/

/*
  Convert a CloudFront event's request query object to a string
  Example Event Structure:
  https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html#functions-event-structure-query-header-cookie

  Example Input: { "ID": { "value": "42" }, "Exp": { "value": "1619740800" } }
  Example Output: "ID=42&Exp=1619740800"
*/
function objectToQueryString(obj) {
  var str = []
  for (var param in obj)
    if (obj[param].multiValue)
      str.push(
        param + '=' + obj[param].multiValue.map((item) => item.value).join(',')
      )
    else if (obj[param].value == '') str.push(param)
    else str.push(param + '=' + obj[param].value)

  return str.join('&')
}

// Check if the URI is for a file
function isRequestForFile(request) {
  return request.uri
    .split('/') // Split the URI into an array
    .filter((n) => n) // Remove empty strings
    .pop() // Get the last item in the array
    .includes('.') // Check if the last item in the array contains a period
}

// Check if the request has a query string object
function requestHasQueryString(request) {
  return Object.keys(request.querystring).length > 0 // Check if the querystring object has any keys
}

function handler(event) {
  var request = event.request

  var rewrites = [
    ['/about/', '/who-we-are/'],
    ['/approach/', '/what-we-do/'],
    ['/article/the-importance-of-coupon-sites-in-affiliate-marketing/', '/insights/'],
    ['/article/what-we-can-learn-about-direct-marketing-from-starbucks/', '/insights/'],
    ['/camplejeune/', '/our-work/'],
    ['/careers/', '/who-we-are/'],
    ['/clients/', '/our-work/'],
    ['/compliance/', '/privacy/'],
    ['/core-services/', '/what-we-do/'],
    ['/data-and-analytics/', '/insights/'],
    ['/digital-marketing/', '/insights/'],
    ['/helix/', '/what-we-do/'],
    ['/home-services/', '/our-work/'],
    ['/infoform/', 'https://my.datasubject.com/FMy59nP1cQ/53694'],
    ['/investor-relations/', '/404/'],
    ['/job/account-director-digital-strategist/', '/who-we-are/'],
    ['/media/', '/insights/'],
    ['/newsroom/', '/insights/'],
    ['/newsroom/converge-appoints-soshana-winter-and-jason-whiting/', '/insights/converge-appoints-soshana-winter-and-jason-whiting/'],
    ['/newsroom/home-services-must-get-smarter/', '/insights/'],
    ['/our-work/cricket/', '/our-work/'],
    ['/our-work/optavia/', '/our-work/'],
    ['/performance-marketing/', '/insights/'],
    ['/performance/', '/what-we-do/'],
    ['/pga/', '/our-work/'],
    ['/pointsbet/', '/our-work/'],
    ['/roofing/', '/our-work/'],
    ['/sofi/', '/our-work/'],
    ['/solutions/', '/what-we-do/'],
    ['/strategy/', '/what-we-do/'],
    ['/technology/', '/what-we-do/'],
    ['/telco/', '/our-work/cricket/'],
    ['/windows-installer/', '/our-work/'],
    ['/work/', '/our-work/'],
    ['/xmlrpc.php', '/404/'],
  ]

  // Loop through the existing rewrites and add a trailing slash version for each non-root path
  var updatedRewrites = rewrites.reduce((acc, item) => {
    acc.push(item) // Add the existing rewrite
    if (item[0] !== '/') {
      // Check if the path is not the root path
      acc.push([item[0] + '/', item[1]]) // Add a new rewrite with a trailing slash
    }
    return acc
  }, [])

  for (var arrayIndex in updatedRewrites) {
    if (
      request.uri.toLowerCase() == updatedRewrites[arrayIndex][0].toLowerCase()
    ) {
      var newUri = updatedRewrites[arrayIndex][1]

      var response = {
        statusCode: 302,
        statusDescription: 'Temporarily moved',
        headers: {
          location: { value: newUri },
        },
      }

      return response
    }
  }

  if (request.uri === '/' || isRequestForFile(request)) {
    return request
  }

  if (request.uri.endsWith('/')) {
    // If the URI ends with a slash, lowercase the URI and return it
    request.uri = request.uri.toLowerCase()
    return request
  } else {
    // If the URI does not end with a slash, lowercase the URI and redirect to the same URI with a slash
    var newUri = request.uri.toLowerCase() + '/'

    if (requestHasQueryString(request)) {
      newUri = newUri + '?' + objectToQueryString(request.querystring)
    }

    return {
      statusCode: 302,
      statusDescription: 'Found',
      headers: { location: { value: newUri } },
    }
  }
}
