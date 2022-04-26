import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Pokecard = () => {
    const styles = useStyles();
    return (
        <div>
            <Card className={styles.root}>
                <CardActionArea>
                    {/* <CardMedia className="areapokemon" image="./src/Assets/pokemon_verde.png"></CardMedia> */}
                    <CardMedia className={styles.media} src="https://cl.buscafs.com/www.levelup.com/public/uploads/images/729849/729849.png" title="Pokemon verde" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Pokemon Verde
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            sdkfjlsjfkdjflsjflsjfksdjflsjfkjksldjfslkdjf
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
        </div>
    )
}

export default Pokecard