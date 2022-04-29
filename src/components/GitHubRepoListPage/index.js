import React, {useEffect, useReducer, useRef, useState} from 'react';
import Container from "@mui/material/Container";
import SearchBox from "../components/SearchBox";
import RepoList from "../components/RepoList";
import Box from "@mui/material/Box";
import {makeStyles} from "@mui/styles";
import reducer, {initialState} from "../store/reducer";
import {setRepositoriesList} from "../store/actions";
import requests from "../utils/axios";
import {Autocomplete, TextField} from "@mui/material";
import {sortOptions} from "../utils";

const useStyle = makeStyles({
    wrapper: {
        margin: 20,
    }
})

const RepositoryContext = React.createContext();

const GitHubRepoListPage = () => {
    const classes = useStyle();
    const [{repositoryList, per_page, page} , dispatch] = useReducer(reducer, initialState);
    const [sortValue, setSortValue] = useState(sortOptions[0])
    // const userNameInput = useRef(null)
    // const orgNameInput = useRef(null)
    //
    useEffect(() => {
        requests.get(`/users/gaearon/repos?page=${page}&per_page=${per_page}`).then((res) => dispatch(setRepositoriesList(res)))
    }, [])

    const onChangeSortValue = (value) => {
        setSortValue(value);
        const indexOfValue = sortOptions.indexOf(value)
        dispatch(sortOptions[indexOfValue].action())
    }

    return (
        <Container maxWidth="md">
            <RepositoryContext.Provider value={repositoryList}>
                <Box className={classes.wrapper}>
                    <SearchBox />
                    <Autocomplete
                        value={sortValue}
                        renderInput={(params) => <TextField {...params} label={"Sort By"}/>}
                        options={sortOptions}
                        getOptionLabel={(option) => option.label}
                        onChange={(e,value) => onChangeSortValue(value)}
                        disableClearable
                    />
                    <RepoList
                        // repositoryList={repositoryList}
                    />
                </Box>
            </RepositoryContext.Provider>
        </Container>
    )
}

export default GitHubRepoListPage
