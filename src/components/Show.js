import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {get} from 'lodash';
import {Link} from 'react-router-dom';

export default function Show(props) {

    return (

        <div>
        <Card>
                <CardMedia
                    style={{height:0, paddingTop:'100%'}}
                    image={get(props,'show.image.original','')}
                />

                <CardContent>
                    <Typography variant="subheading" color="inherit">
                        {props.show.name}
                    </Typography>

                </CardContent>
                
                <CardActions>

                    <Button size="small" color="primary"
                    component ={Link} to={`/shows/${props.show.id}`}>
                        Details
                    </Button>
                       
                </CardActions>

            
        </Card>

        </div>
    )
}
