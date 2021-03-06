import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    background: 'linear-gradient(45deg, #ffa300 30%, #f97b3d 90%)',
    borderRadius: '20px',
    border: 0,
    color: theme.palette.secondary.main,
    fontSize: 20,
    height: 50,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
}));

export default function AreaButton(props) {
  const classes = useStyles();
  const { click, title } = props;

  const clickAction = () => {
    click();
  };

  return (
    <Button onClick={clickAction} className={classes.button}>
      {title}
    </Button>
  );
}
