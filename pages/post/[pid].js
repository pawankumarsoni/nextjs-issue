import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from '@material-ui/core/styles';
import {useOvermind} from "@utils/OvermindHelper";
import {useRouter} from 'next/router'
import {NodeFetchHelper} from "@utils/NodeFetchHelper";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({}))

const Post = (props) => {
    const {state, actions} = useOvermind()
    const classes = useStyles();

    const router = useRouter()
    const {pid} = router.query

    useEffect(() => {
        NodeFetchHelper.get('https://api.npoint.io/16a653821d8b6c5483f9', null, null, (status, data) => {
            actions.setData(data)
        })
    }, [])

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charSet="utf-8"/>
                <meta name="Description" content="DESC"></meta>
                <title>{"Title: " + state.data[pid]?.title}</title>
            </Head>
            <Grid>
                {"Desc: " + state.data[pid]?.desc}
            </Grid>
        </>
    );
}

export default Post;
