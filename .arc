@app
forest-1dg

@http
get /
get /:page
get /speakers/:speaker

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
