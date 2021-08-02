const max = (list) => {
    return list.reduce(maximum)
}

function maximum(a, b)
{
    return Math.max(a, b);
}

module.exports = max;
