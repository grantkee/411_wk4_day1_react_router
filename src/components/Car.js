import React from 'react'
import cars from '../cars.json'
// import material ui components here //
import { Container, Paper, Chip, Typography, CssBaseline } from '@material-ui/core'
// import Typography from '@material-ui/core/Typography'

const Car = (props) => {
    let id = props.match.params.id;
    let specificCar = cars.find(car => id == car.id)
    return (

        <Paper>
        <Typography variant="h5" component="h3">
            {specificCar.Name}
        </Typography>
        <Typography component="p">
            <Chip><br/>Miles per Gallon: {specificCar.Miles_per_Gallon}</Chip><br/>
            Cylinders: {specificCar.Cylinders}<br/>
            Displacement: {specificCar.Displacement}<br/>
            Horsepower: {specificCar.Horsepower}<br/>
            Weight in lbs: {specificCar.Weight_in_lbs}<br/>
            Acceleration: {specificCar.Acceleration}<br/>
            Year: {specificCar.Year}<br/>
            Origin: {specificCar.Origin}<br/>        
        </Typography>
        </Paper>
    //         <React.Fragment>
    //             <CssBaseline />
    //             <Container maxWidth="sm">
    //                 <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
    //                 <h1>{specificCar.Name}</h1>
    //                 <p>
    //                     Miles per Gallon: {specificCar.Miles_per_Gallon}<br/>
    //                     Cylinders: {specificCar.Cylinders}<br/>
    //                     Displacement: {specificCar.Displacement}<br/>
    //                     Horsepower: {specificCar.Horsepower}<br/>
    //                     Weight in lbs: {specificCar.Weight_in_lbs}<br/>
    //                     Acceleration: {specificCar.Acceleration}<br/>
    //                     Year: {specificCar.Year}<br/>
    //                     Origin: {specificCar.Origin}<br/>
    //                 </p>
    //                 </Typography>
    //            </Container>
    // </React.Fragment>
    )
}

export default Car;