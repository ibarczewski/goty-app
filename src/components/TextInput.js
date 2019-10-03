import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));

const TextInput = ({dispatch, handleAdd}) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: 'Sekiro: Shadows Die Twice'
      });
    const error = !values.name;
    
      const handleChange = name => event => {
          dispatch(handleAdd(values.name))
      };

      const handleTextChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      }

    return (
        <form className={classes.container} noValidate autoComplete="off">
        <TextField
            error={error}
            id="outlined-name"
            label="Name"
            className={classes.textField}
            value={values.name}
            onChange={handleTextChange('name')}
            margin="normal"
            variant="outlined"
        />
        <Button disabled={error} onClick={handleChange('name')}>Add</Button>
        </form>
    );
}

export default connect()(TextInput);