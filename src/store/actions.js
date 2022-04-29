export const SET_REPOSITORIES_LIST = 'SET_REPOSITORIES_LIST';
export const SORT_BY_STARS = 'SORT_BY_STARS';
export const SORT_BY_MOST_POPULAR = 'SORT_BY_MOST_POPULAR';
export const SORT_BY_MOST_POPULAR_UNFORKED = 'SORT_BY_MOST_POPULAR_UNFORKED'
export const SORT_BY_FORKS = 'SORT_BY_FORKS';
export const SORT_BY_OPEN_ISSUES = 'SORT_BY_OPEN_ISSUES';

export function setRepositoriesList(payload) {
    return {
        type: SET_REPOSITORIES_LIST,
        payload,
    }
}

export function sortByStars() {
    return {
        type: SORT_BY_STARS,
    }
}

export function sortByMostPopular() {
    return {
        type: SORT_BY_MOST_POPULAR,
    }
}

export function sortByMostPopularUnforked() {
    return {
        type: SORT_BY_MOST_POPULAR_UNFORKED,
    }
}

export function sortByForks() {
    return {
        type: SORT_BY_FORKS
    }
}

export function sortByOpenIssues() {
    return {
        type: SORT_BY_OPEN_ISSUES
    }
}
