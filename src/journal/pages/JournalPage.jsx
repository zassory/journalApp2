//import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import { AddOutlined } from '@mui/icons-material';
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views";
//import { NothingSelectedView } from "../views";


export const JournalPage = () => {
  return (
    <JournalLayout>
      {/*<Typography>LorDo pariatur non sint occaecat mollit officia aute.em</Typography>*/}
      
      {/* <NothingSelectedView /> */}
      <NoteView />

      <IconButton
        size='large'
        sx={{
          color:'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main',opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom:50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>    
  )
}