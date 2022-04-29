import React, {useContext, useRef} from 'react';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import requests from "../../utils/axios";
import {RepoListContext} from "../../context";
import {debounce} from "../../utils";

const SearchBox = ({setErrorMessage}) => {
    const {setRepositoriesList } = useContext(RepoListContext)
    const usernameInput = useRef(null)
    const orgNameInput = useRef(null)

    const debounceSearchRepo = debounce((e, isUserName) => onSearchRepo(e, isUserName),300)

    const onSearchRepo = (e, isUserName) => {
        const inputValue = isUserName ? usernameInput.current.value : orgNameInput.current.value
        if(e.key === 'Enter') {
            if(inputValue) {
                requests.get(`/${isUserName ? 'users' : 'orgs'}/${inputValue}/repos?page=1&per_page=30`)
                    .then((res) => {
                        setRepositoriesList(res)
                    })
                    .catch((error) => {
                        setErrorMessage(error.response.data.message)
                    })

            }
        }
    }

    return (
        <div>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
                sx={{paddingBottom: 2}}
            >
                <Grid item>
                    <TextField
                        label="Search by organization name"
                        variant="standard"
                        aria-label="searchOrgName"
                        inputRef={orgNameInput}
                        onKeyDown={(e) => debounceSearchRepo(e, false)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Search by username"
                        variant="standard"
                        // aria-label="searchUsername"
                        inputRef={usernameInput}
                        onKeyDown={(e) => debounceSearchRepo(e, true)}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default SearchBox;
