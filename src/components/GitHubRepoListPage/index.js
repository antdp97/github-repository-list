import React, {useContext, useState} from 'react';
import Container from "@mui/material/Container";
import SearchBox from "../SearchBox";
import RepoList from "../RepoList";
import Box from "@mui/material/Box";
import {makeStyles} from "@mui/styles";
import {Alert, Autocomplete, Snackbar, TextField} from "@mui/material";
import {sortOptions} from "../../utils";
import {RepoListContext} from "../../context";

const useStyle = makeStyles({
    wrapper: {
        margin: 20,
    }
})

const GitHubRepoListPage = () => {
    const classes = useStyle();
    const { sortFunction } = useContext(RepoListContext)
    const [sortValue, setSortValue] = useState(sortOptions[0])
    const [errorMessage, setErrorMessage] = useState('')


    const onChangeSortValue = (value) => {
        setSortValue(value);
        const indexOfValue = sortOptions.indexOf(value)
        sortFunction[indexOfValue]()
    }

    const handleClose = () => {
        setErrorMessage("");
    }

    return (
        <Container maxWidth="md">
                <Box className={classes.wrapper}>
                    <SearchBox setErrorMessage={setErrorMessage}/>
                    <Autocomplete
                        value={sortValue}
                        renderInput={(params) => <TextField {...params} label={"Sort By"}/>}
                        options={sortOptions}
                        onChange={(e,value) => onChangeSortValue(value)}
                        disableClearable
                    />
                    <RepoList />
                    <Snackbar open={errorMessage !== ''} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} variant="filled" severity="error">
                            {errorMessage}
                        </Alert>
                    </Snackbar>
                </Box>
        </Container>
    )
}

export default GitHubRepoListPage
