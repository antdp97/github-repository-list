import React, {Fragment} from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {Chip, ListItemText, Typography} from "@mui/material";

const RepoItem = ({ data }) => {
    // const classes = useStyles();
    const {  stargazers_count, description, full_name, language } = data
    return(
            <ListItemText
                primary={<Typography>{full_name}</Typography>}
                secondary={
                    <Fragment>
                        <Typography>
                            {description}
                        </Typography>
                        <StarBorderIcon/>
                        <span style={{marginRight: 5}}>{stargazers_count}</span>
                        {language ? <Chip label={language} variant="outlined"/> : null}
                    </Fragment>
                }
            />
    )

}

export default RepoItem;
