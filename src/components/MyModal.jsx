import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyModal({modalData, showModal , setShowModal}) {
    const [name, setName] = useState(modalData.name);
    const [des, setDes] = useState(modalData.description);
    const [image, setImage] = useState(modalData.image);

    const [forUpdate, setForUpdate] = useState(false)

    const onUpdate = (e)=>{
        setForUpdate(true)

    }

    const handleSaveChanges = () => {

        const dataForUpdate={
            name: name,
            description: des,
            family: modalData.family,
            place_of_found: modalData.place_of_found,
            specie: "spec",
            habits: "here",
            diet: "nohiiiiiiiiiingh", 
            weight: 2.13,
            height: 120, 
            image: image
          }
          console.log(dataForUpdate);

        axios.put(`https://my-animal-back.vercel.app/animals/update/${modalData.id}`,dataForUpdate ).then(res=>{
            console.log(res.data);
        }).catch(err=>{
            console.error(err);
        })
        console.log("dataForUpdate");
        modalData.name = name;
        setForUpdate(false);
        setShowModal(false);
      };
    
    
   
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal  show={showModal} onHide={()=>setShowModal(!showModal)}>
        <Modal.Header closeButton>
         {forUpdate? <>
         <label>
            Animal Name: 
         </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
         </> :<Modal.Title>{modalData.name}</Modal.Title>} 
        </Modal.Header>

        <Modal.Body>
            {!forUpdate &&<Button style={{display: "float"}} variant="primary" onClick={onUpdate}>Update</Button>
    }
        {!forUpdate &&<Button style={{display: "float"}} variant="primary">Delete</Button>}
        
                
        

        {forUpdate?<div style={{display:"flex", flexDirection:"column"}}>
            <label>
                Change description
            </label>
            <input
              type="text"
              name="des"
              value={des}
              onChange={(e) => setDes(e.target.value)}
            />
            <label>
                Change image
            </label>
             <input
              type="text"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
        </div>  :<div>
         <p>{modalData.description}</p>
          <img style={{width: "50%"}}  src={modalData.image} alt='animal'/>
         </div>}
         
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShowModal(!showModal)}>Close</Button>
          <Button variant="primary" onClick={handleSaveChanges}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MyModal;