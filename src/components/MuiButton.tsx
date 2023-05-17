import React from 'react'
import {Stack, Button, IconButton} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

function MuiButton() {
  return (
      <Stack spacing={4}>
    <Stack spacing={2} direction='row'>
        <Button variant='text' href="https://google.com">Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
    </Stack>

    <Stack spacing={2} direction="row">
        <Button variant="contained"color="primary" >Primary</Button>
        <Button variant="contained"color="secondary" >secondary</Button>
        <Button variant="contained"color="warning" >warning</Button>
        <Button variant="contained"color="info" >info</Button>
        <Button variant="contained"color="success" >success</Button>
        <Button variant="contained"color="primary" >Primary</Button>

    </Stack>
    <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">medium</Button>
        <Button variant="contained" size="large">large</Button>
    </Stack>

    <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon/>} disableRipple onClick={()=> alert("Clicked")}>Send</Button>
        <Button variant="contained" endIcon={<SendIcon/>} disableElevation>Send</Button>
        <IconButton aria-label='send' color="success" size="small">
            <SendIcon/>
        </IconButton>
    </Stack>
    </Stack>
  )
}

export default MuiButton
