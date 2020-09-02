import Head from 'next/head'
import { Paper, Typography, makeStyles, Container, Box } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'center'
  },
  section: {
    height: '100vh',
    display: 'flex',
  }
}))

export default function Home() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography align='center' variant='h1'>
        🔥 Firebase
      </Typography>
      <Typography align='center' variant='h1'>
        ⏩ Next
      </Typography>
      <Typography align='center' variant='h1'>
        🚀 MaterialUI
      </Typography>
    </Paper>
  )
}
