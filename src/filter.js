const filter = (list, operation) => {
    if(operation == "true" || operation == "false")
    {
        return list.filter((n) => {
            if(operation == "true")
                return n;
        })
    }
    if(operation == "greaterthan1")
      return list.filter(n => {
          return n > 1;
      })

    return list.filter(n => {
      return n.charCodeAt(0) < 91;
    })
}

module.exports = filter;
