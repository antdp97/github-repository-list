import React from 'react';
import {
    setErrorMessage,
    setRepositoriesList,
    sortByForks,
    sortByMostPopular,
    sortByMostPopularUnforked, sortByOpenIssues,
    sortByStars
} from "./store/actions";
import reducer, {initialState} from "./store/reducer";

export const RepoListContext = React.createContext();

export const Provider = ({ children }) => {
    const [ state , dispatch] = React.useReducer(reducer,initialState);

    const value = {
        repositoryList: state.repositoryList,
        per_page: state.per_page,
        page: state.page,
        // error_message: state.error_message,
        setRepositoriesList: (payload) => dispatch(setRepositoriesList(payload)),
        setErrorMessage: (payload) => dispatch(setErrorMessage(payload)),
        sortFunction: [
            () => console.log("Default"),
            () => dispatch(sortByStars()),
            () => dispatch(sortByMostPopular()),
            () => dispatch(sortByMostPopularUnforked()),
            () => dispatch(sortByForks()),
            () => dispatch(sortByOpenIssues())
        ],

    }

    return (
        <RepoListContext.Provider value={value}>
            {children}
        </RepoListContext.Provider>
    )
}
