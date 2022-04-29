import React, {useContext} from 'react';
import List from "@mui/material/List";
import RepoItem from "../RepoItem";
import {Divider, ListItem} from "@mui/material";
import {RepoListContext} from "../../context";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    item: {
        backgroundColor: 'gray',
        border: '1px solid',
        borderRadius: 10,
        marginBottom: 5,
    }
})

const RepoList = () => {
    const classes = useStyles();
    const { repositoryList } = useContext(RepoListContext)
    return (
        <>
            <List>
                {repositoryList.map((repo, index) => {
                    return (
                        <div className={classes.item} key={repo.id} data-testid={`repoItem${index}`} >
                            <ListItem>
                                <RepoItem data={repo}/>
                            </ListItem>
                            <Divider variant="inset" component="li"/>
                        </div>
                    )
                })}
            </List>
        </>
    )
}

export default RepoList;
