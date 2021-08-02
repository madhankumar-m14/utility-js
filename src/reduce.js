const reduce = (list, operation, x = null) => {
    if(operation == "sum")
    {
        if(list.length == 0){
          if(x == null)
            return undefined;
          return x
        }
        return list.reduce(summation)
    }

    if(operation == "appendfront")
    {
        return list.reduce(summation, 'z')
    }
}

function summation(a, b)
{
    return a + b;
}

module.exports = reduce;
