import React, {useState,useEffect} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import Avatar from '../../assets/userAvatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'
import H1 from '../../components/title'
import ContainerItens from "../../components/ContainerItens";
import Button from '../../components/Button'

import {
  Container,
  ConsultImage,
  User
} from "./styles"

const Users = () => {
  const [users,setUsers] = useState([])
  const navigate = useNavigate()


  function goBackPage () {
    navigate('/')
  }

  useEffect(() => {

    async function fetchUsers () {
    const {data:newUsers} = await axios.get("http://localhost:3005/users/")

    setUsers(newUsers)
    }

    fetchUsers()
  }, [])
  
  
  async function deleteUser (userId) {
    await axios.delete(`http://localhost:3005/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  return (
    <Container>
      <ConsultImage src={Avatar} alt="avatar-users" />

      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {
            users.map( (user) =>
             <User key={user.id} >
               <p>{user.name}</p> <p>{user.age}</p>
               <button onClick={ () => deleteUser(user.id)} ><img src={Trash} alt="trash"></img></button>
             </User> 
            )
          }
        </ul>

        <Button userButton={true} onClick={goBackPage} >Voltar <img src={Arrow} alt="arrow"></img>  </Button>

        

      </ContainerItens>
    </Container>
  )
}

export default Users