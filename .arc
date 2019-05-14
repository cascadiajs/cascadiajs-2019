@app
lion-ncr

@http
get /
get /:page

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
