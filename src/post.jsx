import React from 'react';
import Comments from './comments'
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Post() {
    const [post, setPost] = useState([]);
    const [expanded, setExpanded] = React.useState(false);
    const [expandedId, setExpandedId] = React.useState(-1);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPost(data);
            })
    }, [])

    const handleExpandClick = (i) => {
        setExpandedId(expandedId === i ? -1 : i);
      };
  
    return (

        <div className='post'>
            {
                post && post.length > 0 && post?.map((e) => {
                    return (
                        <Card className='card' sx={{ maxWidth: 345 }}>
                            <CardActionArea>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {e.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {e.body}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <ExpandMore
                                    // expand={expanded}
                                    onClick={() => handleExpandClick(e.id)}
                                    aria-expanded={expandedId === e.id}
                                    aria-label="show more"
                                
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>

                            </CardActions>
                            <Collapse in={expandedId === e.id} timeout="auto" unmountOnExit>
                                <CardContent>
                                    {/* <Typography paragraph>Comments</Typography> */}

                                    <Typography paragraph>

                                        <Comments id = {e?.id}/>
                                    </Typography>

                                </CardContent>
                            </Collapse>
                        </Card>
                    );

                })
            }

        </div>
    )
}
