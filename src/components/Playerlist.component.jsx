import React from 'react'
import Playercard from './Playercard.component';
import Grid from '@material-ui/core/Grid'
const Playerlist = ({ playerList }) => {



    const renderList = () => {
        return playerList.map(player => {
            return <Grid key={player.Id} item xs={12} sm={4} md={3}><Playercard player={player} /></Grid>
        })
    }

    // console.log(playerList)
    return (
        <div style={{ margin: '1rem' }}>
            <Grid container spacing={3}>
                {renderList()}
            </Grid>
        </div>)
}

export default Playerlist;