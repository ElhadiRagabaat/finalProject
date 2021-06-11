import React from 'react'
import { Container, makeStyles, TextField, Button } from '@material-ui/core'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import firebase from 'firebase'


import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,

} from '@material-ui/pickers'
import { useState } from 'react'
import { db } from '../firebase'
import { useHistory } from 'react-router-dom'

const myStyle = makeStyles({
    inputs: {
        marginBottom: 20,
        marginTop: 20,
        display: "block"
    },
    container: {
        maxWidth: 400,
        marginTop:50
    },
})

function Booking() {

    const classes = myStyle()
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [phone, setPhone] = useState("")
    const [event, setEvent] = useState("")
    const [name, setName] = useState("")
    const [isBooked, setIsBooked] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [eventError, setEventError] = useState(false)
    const history = useHistory()
    // const unixTimestamp = 1575909015

    //2019-12-9 10:30:15


    const handleDateChange = (date) => {
        setSelectedDate(date)
    }


    const handleBookin = (e) => {
        e.preventDefault()
        setNameError(false)
        setEventError(false)
        setPhoneError(false)

        if (name === "") {
            setNameError(true)
        }
        if (phone === "") {
            setPhoneError(true)
        }
        if (event === "") {
            setEventError(true)
        }


        if (name && event && phone) {
            db.collection("Booking").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                phone: phone,
                name: name,
                Event: event,
                date: selectedDate
            }).then(() => {

                document.getElementById("container").style.display = "none"
                setIsBooked(true)
                setTimeout(function () {

                    history.push("/")
                }, 5000);
            })




        }


    }



    return (
        <>
            {isBooked && <div style={{
                marginTop: "70px", fontWeight: "bolder",
                color: "pink", fontSize: "20px"
            }}>
                <h1> Hey <span style={{color:"black"}}>{ name } </span> thank you for Contact us  </h1>
                <h1> and we will back to you soon</h1>

            </div>}
            <Container className={classes.container} id="container">

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div style={{ justifyContent: "space-between", display: 'flex' }}>
                        <KeyboardDatePicker
                            margin='normal'
                            placeholder="seletc date"
                            value={selectedDate}
                            onChange={date => handleDateChange(date)}
                            KeyboardButtonProps={{
                                'aria-label': 'change date'
                            }}
                        />
                        <KeyboardTimePicker
                            margin='normal'
                            placeholder="08:00 AM"
                            mask="__:__ _M"
                            value={selectedDate}
                            onChange={date => handleDateChange(date)}
                        />

                    </div>
                </MuiPickersUtilsProvider >

                <form noValidate onSubmit={handleBookin}>

                    <TextField
                        className={classes.inputs}
                        onChange={(e) => setName(e.target.value)}
                        variant="outlined"
                        fullWidth
                        label="Name"
                        color="secondary"
                        required
                        error={nameError}
                    />
                    <TextField
                        className={classes.inputs}
                        onChange={(e) => setPhone(e.target.value)}
                        variant="outlined"
                        fullWidth
                        label="Phone"
                        color="secondary"
                        required
                        error={phoneError}
                    />
                    <TextField
                        className={classes.inputs}
                        onChange={(e) => setEvent(e.target.value)}
                        variant="outlined"
                        fullWidth
                        label="Event"
                        color="secondary"
                        required
                        error={eventError}
                    />
                    <Button variant="contained" type="submit"
                        color="secondary" className={classes.inputs} style={{ margin: " 0 auto" }}>Submit</Button>

                </form>
            </Container>
        </>
    )
}

export default Booking
