import {Button, Card, CardActions, createTheme, TextField, ThemeProvider, Typography} from "@mui/material";
import {purple} from "@mui/material/colors";
import {Form} from "react-bootstrap";
const theme = createTheme({
 palette: {
  primary: {
   // Purple and green play nicely together.
   main: purple[500],
  },
  secondary: {
   // This is green.A700 as hex.
   main: '#11cb5f',
  },
 },
});


function FeedbackForm(){

 const handleFormSubmit = () =>{

 }
 return(
     <section>
      <Typography variant="h4" gutterBottom>
       Feedback Form
      </Typography>
      <Form onSubmit={handleFormSubmit}>
       <TextField id="filled-basic" label="Filled" variant="filled"  />

        <ThemeProvider theme={theme}>
        <Button variant="contained"  fullWidth>Submit Feedback</Button>
        </ThemeProvider>

      </Form>
     </section>

 )
}

export default FeedbackForm;