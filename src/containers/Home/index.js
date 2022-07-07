import React, {useState,useRef} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import Consulting from '../../assets/consulting.svg'
import Arrow from '../../assets/arrow.svg'
import H1 from '../../components/title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'

import {
  Container,
  Label,
  Input,
  ConsultImage
} from "./styles"

const Home = () => {
  const [users,setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const navigate = useNavigate()

  async function addNewUser () {
    
    const {data:newUser} = await axios.post('http://localhost:3005/users/',
    {name:inputName.current.value,age:inputAge.current.value})
    
  

    setUsers([...users,newUser])

    navigate('/users')
    
  }



  return (
    <Container>
      <ConsultImage src={Consulting} alt="consult" />

      <ContainerItens>
        <H1 Oi={'Oi'} >Olá!</H1>

        <Label>Nome</Label>
        <Input placeholder="Nome"  ref={inputName}/>

        <Label>Idade</Label>
        <Input placeholder="Idade" ref={inputAge} />

        <Button onClick={addNewUser}>Cadastrar <img src={Arrow} alt="arrow"></img>  </Button>

      </ContainerItens>
    </Container>
  )
}

export default Home