import {
    SET_ERROR_MESSAGE,
    SET_REPOSITORIES_LIST,
    SORT_BY_FORKS,
    SORT_BY_MOST_POPULAR,
    SORT_BY_MOST_POPULAR_UNFORKED, SORT_BY_OPEN_ISSUES,
    SORT_BY_STARS
} from "./actions";
import {dynamicSort, mostPopularCompare, mostPopularUnforkedCompare} from "../utils";
export const initialState = {
    repositoryList: [],
    page: 1,
    per_page: 10,
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_REPOSITORIES_LIST:
            return {
                ...state,
                repositoryList: action.payload
            }

        case SORT_BY_STARS:
            const mostStarSortRepos = [...state.repositoryList];
            mostStarSortRepos.sort(dynamicSort("stargazers_count"));
            return {
                ...state,
                repositoryList: mostStarSortRepos
            }

        case SORT_BY_MOST_POPULAR:
            const mostPopularSortRepos = [...state.repositoryList];
            mostPopularSortRepos.sort((a, b) => mostPopularCompare(a, b));
            return {
                ...state,
                repositoryList: mostPopularSortRepos
            }

        case SORT_BY_MOST_POPULAR_UNFORKED:
            const mostPopularUnforkedRepos = [...state.repositoryList];
            mostPopularUnforkedRepos.sort((a, b) => mostPopularUnforkedCompare(a, b))
            return {
                ...state,
                repositoryList: mostPopularUnforkedRepos
            }

        case SORT_BY_FORKS:
            const mostForkSortedRepo = [...state.repositoryList];
            mostForkSortedRepo.sort(dynamicSort("fork_count"));
            return {
                ...state,
                repositoryList: mostForkSortedRepo
            }

        case SORT_BY_OPEN_ISSUES:
            const mostOpenIssuesSortedRepo = [...state.repositoryList];
            mostOpenIssuesSortedRepo.sort(dynamicSort("open_issues_count"));
            return {
                ...state,
                repositoryList: mostOpenIssuesSortedRepo
            }

        default:
            return {...state}
    }
}

export default reducer;
