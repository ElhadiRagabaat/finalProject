import React from 'react'
import DehazeIcon from '@material-ui/icons/Dehaze';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { Drawer, makeStyles, ListItem, ListItemText, Typography, List, ListItemIcon } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';

const drawerWidth = 200

const myStyle = makeStyles({
    root: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-betown",
       

    },
    drawer: {
        width: drawerWidth,
    },

    drawerPaper: {
        width: drawerWidth,

    },
    page: {
        background: '#f9f9f9',
        width: '100%',
        padding:20
        
    },
    galleryImages:{
        width:`calc(100% - ${drawerWidth}px)`
    }
})

function Admin({children}) {
    const classes = myStyle()
    const history = useHistory()
    const listItem = [
        {
            text: "Admin",
            icon: <DehazeIcon color='secondary' />,
            path: "/admin"
        },
        {
            text: "AddImage",
            icon: <NoteAddIcon color='secondary' />,
            path: "/create"
        },
        {
            text: "Booking",
            icon: <EmailIcon color='secondary' />,
            path: "/bookingList"
        },
    ]
    return (
        <div>
            <Drawer
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}>
                <div className={classes.page}>
                    <Typography variant="h6" color='secondary'>
                        Dashboard
                    </Typography>
                </div>
                <List>
                    {listItem.map(item => (
                        <ListItem key={item.text} 
                        button
                        onClick={()=> history.push(item.path)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.text}</ListItemText>
                        </ListItem>
                    ))}

                </List>


            </Drawer>
          
          <div  style={{marginTop:"14px", marginLeft:"190px"}}>
           {/* <Data/> */}
           {children}
            </div>
            
          
         
        </div>
    )
}

export default Admin
