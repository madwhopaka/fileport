import logo from './logo.svg';
import './App.css';
import {Container,Grid, Card} from "@mui/material"; 
import { UploadContainer } from './UploadContainer';
import Context from '@mui/base/TabsUnstyled/TabsContext';

function App() {
  return (
    <Grid container>
     <Card className= "upload-container" sx = {{ borderRadius: "25px"}}>
     <UploadContainer />
     </Card>
    </Grid>
  );
}

export default App;
