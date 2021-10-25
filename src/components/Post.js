import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, Modal } from "@mui/material";
import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  card: {
    margin: 15,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
  },
}));

function Post(props) {
  const classes = styles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card className={classes.card}>
        {/* <CardActionArea onClick={() => setOpen(true)}> */}
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          title="Post One"
          image={props.image}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.text}
          </Typography>
        </CardContent>
        {/* </CardActionArea> */}
        <CardActions onClick={() => setOpen(true)}>
          <Button>Learn More</Button>
        </CardActions>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Container className={classes.container}>
          <Typography>{props.text}</Typography>
        </Container>
      </Modal>
    </div>
  );
}

export default Post;
