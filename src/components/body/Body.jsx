import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MyCard from '../MyCard';
import NavBar from '../nav/NavBar';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CiSearch } from "react-icons/ci";
import MyModal from '../MyModal';
import "./body.css"
import MyDropDown from '../MyDropDown';

export default function Body() {
    const [animalData, setAnimalData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        axios.get("https://my-animal-back.vercel.app/animals").then(
          res => {
            console.log(res.data);
            setAnimalData(res.data.rows)
    
          }
        )
    
      }, [])

      

      const openCard = (modalData)=>{
        setModalData(modalData)
        console.log(modalData);
        setShowModal(true)


      }

      const sortName = (typeSort)=>{
        
        if(typeSort === "asc"){

            setAnimalData([...animalData].sort((a, b) => a.name.localeCompare(b.name)))
        }
        else{
            setAnimalData([...animalData].sort((a, b) => b.name.localeCompare(a.name)))
        }

      }

      const handleSearch = () => {
        console.log(searchName);
        axios.get(`https://my-animal-back.vercel.app/animals?search=${searchName}`).then(
            res => {
                console.log(res.data);
                setAnimalData(res.data);
            }
        );
    };

  return (
    <div>
        <NavBar/>
        <Container style={{marginTop:"20px"}}>
            <div className='bodyNav'>
          <section className='search'>

           
          <input 
                            type='text' 
                            name='searchName' 
                            value={searchName} 
                            onChange={(e) => setSearchName(e.target.value)}
                        />
            <button  onClick={handleSearch}>  <CiSearch /> Search</button>
          </section>
            
          
          
          <MyDropDown sortFunction={sortName}/>
            <Button variant="primary">Add Animal</Button>
            </div>
            {!showModal ? 
            <Row >
            {animalData && animalData.map(ele => {
                return (<Col   key={ele.id}>
                    <div onClick={()=>openCard(ele) } >
                <MyCard  cardData={ele}   />
                    </div>
                </Col >)
              })}
                </Row>: <MyModal showModal={showModal} setShowModal={setShowModal}  modalData={modalData}/>
    }
        </Container>

    </div>
      )
    }
