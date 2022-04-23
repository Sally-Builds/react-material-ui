import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { DeleteOutline } from '@mui/icons-material/'

const NoteCard = ({ note }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red'[500] }} aria-label="recipe">
            DJ
          </Avatar>
        }
        action={
          <IconButton aria-label="delete">
            <DeleteOutline />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {note.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NoteCard
