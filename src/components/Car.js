import React from 'react'
import cars from '../cars.json'
// import material ui components here //
import { Container, Paper, Chip, Typography, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
// import Typography from '@material-ui/core/Typography'

//
const Car = (props) => {
    let id = props.match.params.id;
    let specificCar = cars.find(car => id === `${car.id}`)
    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        }
    }))
    
    return (
        <Paper style={{margin:'40px auto auto auto', width: '400px'}}>
        <Typography variant="h5" component="h3" style={{margin: '15px'}}>
            {specificCar.Name}
        </Typography>
        <Typography component="p" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', height: '300px', width: '400px'}}>
            <br/><Chip label={`Miles per Gallon: ${specificCar.Miles_per_Gallon}`}></Chip><br/>
            <Chip label={`Cylinders: ${specificCar.Cylinders}`}/><br/>
            <Chip label={`Displacement: ${specificCar.Displacement}`}/><br/>
            <Chip label={`Horsepower: ${specificCar.Horsepower}`}/><br/>
            <Chip label={`Weight in lbs: ${specificCar.Weight_in_lbs}`}/><br/>
            <Chip label={`Acceleration: ${specificCar.Acceleration}`}/><br/>
            <Chip label={`Year: ${specificCar.Year}`}/><br/>
            <Chip label={`Origin: ${specificCar.Origin}`}/><br/>        
        </Typography>
        </Paper>
    )
}

export default Car;