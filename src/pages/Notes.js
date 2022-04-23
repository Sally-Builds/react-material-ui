import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { Grid, Paper } from '@mui/material'
import NoteCard from '../components/NoteCard'

const fetchNotes = async () => {
  const res = await fetch('http://localhost:9000/notes')
  const data = await res.json()
  return data
}

const Notes = () => {
  const [notes, setNotes] = useState([])
  useEffect(() => {
    fetchNotes()
      .then((res) => setNotes(res))
      .catch((e) => console.log(e))
  }, [])

  return (
    <Container>
      {/* <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid> */}
      <Grid container>
        {notes.map((note, id) => (
          <Grid key={id} item xs={12} sm={6} md={3} margin>
            <NoteCard note={note} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Notes
