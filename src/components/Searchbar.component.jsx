import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Grid } from '@material-ui/core';

const Searchbar = ({ filterPlayers }) => {

    const [searchValue, setSearchValue] = useState("")

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value)
        filterPlayers(e.target.value)
    }

    return (
        <Grid container justify="center">
            <Grid item>
                <TextField
                    value={searchValue}
                    onChange={onSearchValueChange}
                    id="outlined-search"
                    label="Search players" type="search" variant="outlined" />
            </Grid>
        </Grid>
    )
}

export default Searchbar;