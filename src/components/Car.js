import React from 'react'
import cars from '../cars.json'
// import material ui components here //
import { Container, Paper, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
// import Typography from '@material-ui/core/Typography'

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
        <Container maxWidth="sm" className={useStyles.root}>
            <Paper >
                <h1>{specificCar.Name}</h1>
                {
                    Object.keys(specificCar).map((info) => {
                        return <Chip label={`${info}: ${specificCar[info]}`}/>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Car;