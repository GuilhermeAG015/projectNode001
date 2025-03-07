export function extractQueryParams(query) {
  return query.substr(1).splite('&').reduce((queryParams, param) => {
    const [key, value] = param.split('=')

    queryParams[key] = value

    return queryParams
  }, {})
}