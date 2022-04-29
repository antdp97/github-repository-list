export function dynamicSort(property) {
    let sortOrder = 1;
    if(property[0] === '-') {
        sortOrder = -1;
        property = property.substr(-1)
    }
    return function(a, b) {
        let result = (a[property] < b[property] ? - 1 : (a[property] > b[property]) ? 1 : 0);
        return result * sortOrder
    }
}

export function mostPopularCompare(a, b) {
    return (a.stargazers_count - b.stargazers_count || a.watchers_count - b.watchers_count || a.fork_count - b.fork_count);
}

export function mostPopularUnforkedCompare(a, b) {
    if(!a.fork && b.fork) {
        return -1
    }

    if(a.fork && !b.fork) {
        return 1
    }

    if((a.fork && b.fork) || !(a.fork && b.fork)){
        return mostPopularCompare(a, b);
    }
}

export const sortOptions = [
    'Default',
    'Most Stars',
    'Most Popular',
    'Most Popular Original Work',
    'Most Forks',
    'Most Open Issues',
];

export function debounce(func, timeout = 1000) {
    let timer;
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args);
            }, timeout)
    }
}
