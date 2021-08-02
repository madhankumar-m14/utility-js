const map = (list, operation) => {
    if(operation == "cube")
        return list.map(cube);

    if(operation == "identity")
        return list;
}

function cube(n)
{
    return n * n * n;
}

module.exports = map;
