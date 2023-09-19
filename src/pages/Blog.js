import { useState, useEffect } from 'react'
import { Button } from '@mui/material';
import axios from 'axios'
import { Link } from 'react-router-dom'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const App = () => {
  const [dados, setDados] = useState([])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    Carregar()

  }, [])

  const Carregar = async () => {
    var url = "https://jsonplaceholder.typicode.com/posts"
    await axios.get(url)
      .then(data => {
        setDados(data.data)
      })

  }

  const Carregar_Coments = async (idpost) => {
    //var idpost = 5
    var url = "https://jsonplaceholder.typicode.com/comments?postId=" + idpost
    await axios.get(url)
      .then(comment => {
        setDados(comment.data)
        handleOpen()
      })
  }



  var informacoes = dados.map((post, key) => {
    return (
      <div key={key}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIE8h7DaSiUYrKZTbQ4boSngl4VKFPiRecnw&usqp=CAU"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant='contained'
            onClick={() => Carregar_Coments(post.id)}
          >Ver comentário</Button>
          <hr />

        </CardActions>
      </div>
    )
  })

  var modal = dados.map((coment, key) => {
    return (
      <div key={key}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>

            <Typography id="modal-modal-title" variant="h6" component="h2">
              {coment.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
              {coment.body}
            </Typography>
          </Box>
        </Modal>
      </div>
    )
  })

  return (
    <div>
      <Button
        variant='contained'

      ><Link to="../">VOLTAR</Link></Button> <br /><br />

      <Card sx={{ maxWidth: 345 }}>

        {informacoes}
      </Card>

      {modal}




    </div>
  )
}
export default App