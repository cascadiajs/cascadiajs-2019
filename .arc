@app
lion-ncr

@http
get /
get /:page
get /static/:file

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
