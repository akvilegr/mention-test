import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import TwitterIcon from '@material-ui/icons/Twitter';
import WebRoundedIcon from '@material-ui/icons/WebRounded';
import Grid from '@material-ui/core/Grid';

const SOURCE_TYPES_ICONS = {
    web: <LanguageRoundedIcon color="secondary" fontSize="small" style={{ color: "white" }} />,
    twitter: <TwitterIcon color="secondary" fontSize="small" style={{ color: "white" }} />,
    blogs: <WebRoundedIcon color="secondary" fontSize="small" style={{ color: "white" }} />
};

const SOURCE_TYPES_COLORS = {
    web: "secondary",
    twitter: "primary",
    blogs: "error"
}

const useStyles = makeStyles({
    root: {
        minWidth: 300,
    }
});

export default function Mention(props) {

    const classes = useStyles();

    return <div>
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Grid container spacing={2} direction="row">
                    <Grid item>
                        <Badge
                            color={SOURCE_TYPES_COLORS[props.source_type]}
                            overlap="circle"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            badgeContent={SOURCE_TYPES_ICONS[props.source_type]}>
                            <Avatar alt={props.source_name} src={props.picture_url} />
                        </Badge>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography color="textSecondary">
                                    {props.source_url}
                                </Typography>
                                <Typography variant="h6">
                                    {props.title.slice(0, 41) + "..."}
                                </Typography>
                                <Typography color="textSecondary">
                                    {props.description_medium}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography color="textSecondary">
                                {new Intl.DateTimeFormat("en-GB", {
                                    month: "short",
                                    day: "2-digit"
                                }).format(Date.parse(props.created_at))}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </div >
}