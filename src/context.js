import React from 'react';
import {setRepositoriesList} from "./store/actions";
import reducer, {initialState} from "./store/reducer";

const RepoListContext = React.createContext();

const Provider = ({ children }) => {
    const [ state , dispatch] = React.useReducer(reducer,initialState);

    const value = {
        repositoryList: state.repositoryList,
        per_page: state.per_page,
        page: state.page,
        setRepositoriesList: (payload) => dispatch(setRepositoriesList(payload))
    }

    return (
        <RepoListContext.Provider value={value}>
            {children}
        </RepoListContext.Provider>
    )
}

export default Provider;
