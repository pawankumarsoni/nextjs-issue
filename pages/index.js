import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from '@utils/OvermindHelper'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from 'next/link'

const links = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
]

const Index = (props) => {
    const {state, actions} = useOvermind()

    return (
        <Grid style={{margin: 32}} container direction='column' alignContent='center' alignItems='center'
              justify='center'>

            <Typography variant='h3'>Overmind states</Typography>
            <Typography variant='h6'>Counter: {state.counter}</Typography>
            <Button style={{
                marginTop: 8,
                width: 150
            }} variant='contained' color='primary' onClick={() => {
                actions.increase(1)
            }}>+</Button>
            <Button style={{
                marginTop: 8,
                width: 150
            }} variant='contained' color='primary' onClick={() => {
                actions.increase(-1)
            }}>-</Button>

            <Typography variant='h3'>Links</Typography>
            {
                links.map((item) => {
                    return <Link href={"/post/" + item}>
                        <a>{item}</a>
                    </Link>
                })
            }
            <p>HHAHAHAH</p>

            <p>sas</p>
            <p>sas</p>
            <p>sas</p>


        </Grid>
    );
}

export default Index;
