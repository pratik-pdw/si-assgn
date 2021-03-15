import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import dateformat from 'dateformat'
import TodayIcon from '@material-ui/icons/Today';
import ScheduleIcon from '@material-ui/icons/Schedule';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
const useStyles = makeStyles({
    root: {
        maxWidth: 350,
    },
    media: {
        height: 200,
        backgroundPosition: 'cover'
    },
});
const Playercard = ({ player }) => {
    const classes = useStyles();
    const playerImg = `player-images/${player.Id}.jpg`;
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={playerImg}
                />
                <CardContent>
                    <Typography color="primary" variant="h6" >
                        {player.PFName}
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        {/* <SportsSoccerIcon color="disabled" /> */}
                        <Typography variant="body1" color="textSecondary" >
                            {player.SkillDesc}
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <MonetizationOnIcon color="action" />
                        <Typography variant="body1" color="textSecondary" >
                            {`${player.Value}`}
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <DoubleArrowIcon color="action" />
                        <Typography variant="subtitle2" color="textSecondary" >
                            {player.UpComingMatchesList[0].CCode && player.UpComingMatchesList[0].VsCCode ? `${player.UpComingMatchesList[0].CCode} vs. ${player.UpComingMatchesList[0].VsCCode}` : 'No Upcoming Matches'}
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <TodayIcon color="action" />
                        <Typography variant="subtitle2" color="textSecondary" >

                            {
                                player.UpComingMatchesList[0].MDate ? dateformat(player.UpComingMatchesList[0].MDate, "dd-mm-yyyy h:MM:ss TT") : 'N/A'
                            }
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>)
}

export default Playercard;