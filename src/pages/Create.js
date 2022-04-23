import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { FormLabel, FormControl } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
})

const createNote = async (data) => {
  try {
    const res = await fetch('http://localhost:9000/notes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await res.json()
  } catch (e) {
    console.log(e)
  }
}

const Create = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)
  const [category, setCategory] = useState('money')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setDescriptionError(true)
    setTitleError(true)

    if (!title) setTitleError(true)
    if (!descriptionError) setDescriptionError(true)
    if (title && description) {
      console.log(title, description, category)
      const res = await createNote({ title, description, category })
      console.log(res)
      navigate('/')
    }
  }

  return (
    <Container>
      <Typography variant="h6" component="h2" color={'textSecondary'} gutterBottom>
        Create New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          required
          fullWidth
          variant="outlined"
          error={titleError}
        />
        <TextField
          className={classes.field}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Note Description"
          required
          multiline
          rows={5}
          fullWidth
          variant="outlined"
          error={descriptionError}
        />

        <FormControl className={classes.field}>
          <FormLabel>Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel control={<Radio />} label="Money" value={'money'} />
            <FormControlLabel control={<Radio />} label="Todos" value={'todos'} />
            <FormControlLabel control={<Radio />} label="Reminder" value={'reminder'} />
            <FormControlLabel control={<Radio />} label="Work" value={'work'} />
          </RadioGroup>
        </FormControl>

        <Button variant="contained" type="submit">
          Add Note
        </Button>
      </form>
    </Container>
  )
}

export default Create
