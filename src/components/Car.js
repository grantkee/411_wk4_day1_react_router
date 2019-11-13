import React from 'react'
import cars from '../cars.json'
// import material ui components here //
import { Container, Paper, Chip } from '@material-ui/core'

const Car = (props) => {
    let id = props.match.params.id;
    let specificCar = cars.find(car => id == car.id)
    return (
        <Container>
        <div>
            <h1>{specificCar.Name}</h1>
            <p>{specificCar.id}</p>
        </div>
        </Container>
    )
}

export default Car;