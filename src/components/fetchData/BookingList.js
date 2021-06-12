import React, { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../firebase'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';





const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
        
        
    },
    tableCntainer: {
        borderRadius: 15,
        marginTop: "70px",
        maxWidth: '90%',
        marginLeft: "20px",
        marginBottom:"20px"
    
    },
    tableHeaderCell: {
        fontWeight: "bold",
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    name: {
        fontWeight: "bold",
        color: theme.palette.secondary.dark
    },
    avatarColor: {
        color: theme.palette.secondary.dark,
        fontSize: '20px',
        
    }
}));


function BookingList() {

    const [posts, setPost] = useState([])
    const classes = useStyles();

    const formatDate = (dateTimStmp) => {
        const milliseconds = dateTimStmp * 1000 // 1575909015000

        const dateObject = new Date(milliseconds)

        const humanDateFormat = dateObject.toLocaleString()
        return humanDateFormat;
    }


    useEffect(() => {

        db.collection("Booking").orderBy("timestamp", 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    console.log(doc.data())
                    documents.push({ ...doc.data(), id: doc.id })
                });
                setPost(documents)
            })


    }, [posts])

    // const handleDelet = (id) => {
    //     db.collection("Bookin").doc(id).delete()
    // }

    return (

        <TableContainer component={Paper} className={classes.tableCntainer}>
            <Table className={classes.table} aria-label="simple table" >
                <TableHead>
                    <TableRow style={{justifyContent:"space-between"}}>
                        <TableCell className={classes.tableHeaderCell}>Name</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Phone</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Event</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Date&Time</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map((row) => (
                        <TableRow key={row.id}>

                            <TableCell className={classes.name}>{row.name}</TableCell>
                            <TableCell >{row.phone}</TableCell>
                            <TableCell>{row.Event}</TableCell>
                            <TableCell className={classes.avatarColor}>{formatDate(row.date.seconds)}</TableCell>
                           
                           
                        </TableRow>

                    ))}


                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default BookingList
