const min = (list) => {
    return list.reduce(minimum)
}

function minimum (a, b)
{
    return Math.min(a, b);
}

module.exports = min;
