import React, { useState, useEffect } from 'react'
import axios from "axios"
// import Modal from 'react-modal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  // Table,
  Badge,
  Button,
  Modal,
  Form,
  InputGroup

} from "react-bootstrap";
import Card from 'react-bootstrap/Card';




export default function Users() {

  // const [id, setId] = useState('')

  const [state, setState] = useState({
    
    image: "",
    name: "",
    // age: "", 
  
    discription: ""
   
  })
  const [delstate, setDelstate] = useState({})
  // const [showEditModel, setshowEditModel] = useState(false)
  const [Modelfordelete, setModelfordelete] = useState(false)


  const [documents, setDocuments] = useState([])

  const URL =  "https://sweetmemoriesreactjs.herokuapp.com";

  useEffect(() => {
    axios.get(`${URL}/getUsers`)
      .then((res) => {
        // console.log(res.data)
        setDocuments(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])






  //image upload
  // const convertToBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);
  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };
  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };
  // const handleFileUpload = async (e) => {

  //   const file = e.target.files[0];
  //   const base64 = await convertToBase64(file);
  //   setState({ ...state, image: base64 });
  // };




  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setState(s => ({ ...s, [e.target.name]: e.target.value }))
  // }



  // const editmodel = (doc) => {
  //   setshowEditModel(true)
  //   // console.log("im clicked")
  //   setState(doc)
  //   console.log(state)

  // }


  // update funtion//////////////////////////////////////////////////////
  // const update = () => {

  //   let newData = { id: state._id, name: state.name, age: state.age, username: state.userName, image: state.image }


  //   axios.put(`${URL}/updateUser`, newData)
  //     .then((res) => {
  //       console.log("message from server", res.data)
  //       // alert("User has been successfully updated.")
  //       toast.success("User updated Succesfullty!", {
  //         position: "top-right",
  //         autoClose: 2000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //       });
  //       setshowEditModel(false)
  //     })
  //     .catch((err) => {
  //       toast.error(err, {
  //         position: "top-right",
  //         autoClose: 2000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //       });
  //       console.error(err)
  //       console.log(newData)
  //     })

  // }
  //  model for edit///////////////////////////////////////////////////////////////
  // const EditModel = (props) => {
  //   return (
  // <Modal
  //   {...props}
  //   aria-labelledby="contained-modal-title-vcenter"
  //   centered
  // >

  //   <Modal.Body className="px-5">
  //   <Form className="px-5 bg-white text-dark" >

  //     <Modal.Header closeButton className="mx-auto" >
  //       <Modal.Title className="fs-2 px-3 text-dark">Edit User</Modal.Title>
  //     </Modal.Header>
  //     <Form.Control type="file"  name='image'
  //           //  defaultValue={state.image}
  //           accept=".jpeg, .png, .jpg"
  //           onChange={(e) => handleFileUpload(e)}
  //         />
  //     <Form.Group className="my-4">
  //       <InputGroup className="mb-3" size="md">
  //         <InputGroup.Text id="basic-addon1">
  //           <i className="fa-solid fa-user-large icons"></i>
  //         </InputGroup.Text>

  //         <Form.Control
  //           type="text"
  //           placeholder=" Name..."
  //           name="name"
  //           defaultValue={state.name}
  //           onChange={(e) => handleChange(e)}
  //         // onChange={(e) => setState(s=>({...s, userName: e}))}
  //         />
  //       </InputGroup>
  //     </Form.Group>
  //     <Form.Group className="my-4">
  //       <InputGroup className="mb-3" size="md">
  //         <InputGroup.Text id="basic-addon1">
  //           <i className="fa-solid fa-envelope icons"></i>
  //         </InputGroup.Text>
  //         <Form.Control
  //           type="number"
  //           placeholder="age"
  //           name="age"
  //           defaultValue={state.age}
  //           onChange={(e) => handleChange(e)}
  //         />
  //       </InputGroup>
  //     </Form.Group>
  //     <Form.Group className="my-4">
  //       <InputGroup className="mb-3" size="md">
  //         <InputGroup.Text id="basic-addon1">
  //           <i className="fa-solid fa-phone-flip icons"></i>
  //         </InputGroup.Text>
  //         <Form.Control
  //           type="text"
  //           placeholder="userName"
  //           name="userName"
  //           defaultValue={state.userName}
  //           onChange={(e) => handleChange(e)}
  //         // onChange={(e) => setState(s=>({...s, mobileNo: e}))}
  //         />
  //       </InputGroup>
  //     </Form.Group>
  //     <Modal.Footer>
  //       <Button
  //         // variant="outline-secondary"
  //         className="btn btn-secondary"
  //         onClick={() => setshowEditModel(false)}
  //       >
  //         Cancel
  //       </Button>
  //       <Button onClick={update}>Update Data</Button>
  //     </Modal.Footer>
  //   </Form>
  //   </Modal.Body>


  // </Modal>
  //   );
  // };



  const deletemodel = (doc) => {

    setModelfordelete(true)
    // console.log("im clicked")
    setDelstate(doc)
    console.log(state)

  }




  const handledelete = () => {
    const { _id } = delstate;
    axios
      .delete(`${URL}/deleteUser/${_id}`)
      .then((res) => {
        // alert("User has been successfully deleted.")
        toast.success("User Deleted Succesfullty!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log("User deleted")
        console.log("message from server", res.data)
        let newArray = documents.filter((doc) => {
          return _id !== doc._id;
        });
        setDocuments(newArray);
        setModelfordelete(false);
      })
      .catch((err) => {
        toast.error(err, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.error(err)
      });
  };


  const DeleteModel = (props) => {
    return (
      <Modal {...props} centered>
        <Modal.Header closeButton className="px-4">
          <Modal.Title className="fs-2">{delstate.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <p className="px-2 fs-5">
            Are you sure you want to delete your account? <br />
            If you delete your account, you will permanently lose your profile.
          </p> */}
          <div> <img src={delstate.image} class="img-fluid" alt="..."/></div>
           <div> <h5>
        <Badge bg="secondary">{delstate.discription}</Badge>
      </h5></div>
        </Modal.Body>
        <Modal.Footer
          as="div"
          className="d-flex justify-content-around align-items-center"
        >
          <Button
            variant="outline-secondary"
            className="w-25"
            onClick={() => setModelfordelete(false)}
          >
            Cancel
          </Button>
          <Button variant="danger" className="w-25" onClick={handledelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  return (
    <>
      <h1 className=" text-dark">Memories</h1>

{/* <div className="d-flex flex-wrap"  >
{documents.map((doc, i) => {
return <div className="card text-white bg-dark m-3 p-4" key={i}>
<p><b>Name</b>: {doc.name}</p>
<p><b>Age</b>: {doc.age}</p>
<p><b>User Name</b>: {doc.userName}</p>
<button onClick={() => deletemodel(doc)} type="buclassName="btn btn-danger m-1">Delete</button>
<button onClick={() => editmodel(doc)} type="button" classNamebtn-warning m-1">Edit</button></div})</div>
*/}


      <div className="d-flex flex-wrap">
        {documents.map((doc, i) => {
          return <Card className="card text-white bg-dark m-3 "
            style={{ width: '18rem' }}
            key={i} >
           
            {/* <Card.Img variant="top" src={doc.image} /> */}
            <div> <img src={doc.image} className="w-100" alt=".." width="304" height="236"/></div>
           
            <Card.Body>
              <Card.Title>{doc.name}</Card.Title>
             

              {/* <button onClick={() => deletemodel(doc)} type="button" className="btn btn-danger m-1">See More</button> */}
              {/* <button onClick={() => editmodel(doc)} type="button" className="btn btn-warning m-1">Edit</button> */}
            </Card.Body>
            <Card.Footer>
            <button onClick={() => deletemodel(doc)} type="button" className="btn btn-danger m-1">See More</button>
            </Card.Footer>
          </Card>

        })
        }
      </div>










      {/* <Modal isOpen={showEditModel}> */}
      {/* <input type="file"  name='image'
                //  defaultValue={state.image}
                accept=".jpeg, .png, .jpg"
                onChange={(e) => handleFileUpload(e)}
              />
        <label for="name">NAME</label>
        <input type="text" name="name" placeholder="Name" value={state.name}  onChange={(e) => handleChange(e)} /><br /><br />
        <label for="Age">AGE</label>
        <input type="number" name="age" placeholder="Age" value={state.age} onChange={(e) => handleChange(e)} /><br /><br />
        <label for="username">USERNAME</label>
        <input type="text" name="userName" placeholder="User Name" value={state.userName} onChange={(e) => handleChange(e)}/><br /><br />
        <button onClick={() => setshowEditModel(false)} type="button" className="btn btn-Secondary">cancel</button>
        <button type="button" onClick={update} className="btn btn-Secondary">edit</button> */}


         {/* <!-- Button trigger modal -->
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Launch static backdrop modal
        </button>

        {/* <!-- Modal --> */}
        {/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Edit this Field</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <input type="file" name='image'
                  
                  accept=".jpeg, .png, .jpg"
                  onChange={(e) => handleFileUpload(e)}
                />
                <label for="name">NAME</label>
                <input type="text" name="name" placeholder="Name" value={state.name} onChange={(e) => handleChange(e)} /><br /><br />
                <label for="Age">AGE</label>
                <input type="number" name="age" placeholder="Age" value={state.age} onChange={(e) => handleChange(e)} /><br /><br />
                <label for="username">USERNAME</label>
                <input type="text" name="userName" placeholder="User Name" value={state.userName} onChange={(e) => handleChange(e)} /><br /><br />
                <button onClick={() => setshowEditModel(false)} type="button" className="btn btn-Secondary">cancel</button>
              
              </div>
              <div className="modal-footer">
                <button onClick={() => setshowEditModel(false)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button onClick={update} type="button" className="btn btn-primary">Edit</button>
              </div>
            </div>
          </div>
        </div> */}
      {/* </Modal>  */}

      {/* <Modal isOpen={showEditModel}> */}

        {/* <!-- Button trigger modal --> */}
        {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Launch static backdrop modal
        </button> */}

        {/* <!-- Modal --> */}
        {/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Edit this Field</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <input type="file" name='image'
                  //  defaultValue={state.image}
                  accept=".jpeg, .png, .jpg"
                  onChange={(e) => handleFileUpload(e)}
                /> */}
                {/* <label for="name">NAME</label>
                <input type="text" name="name" placeholder="Name" value={state.name} onChange={(e) => handleChange(e)} /><br /><br />
                <label for="Age">AGE</label>
                <input type="number" name="age" placeholder="Age" value={state.age} onChange={(e) => handleChange(e)} /><br /><br />
                <label for="username">USERNAME</label>
                <input type="text" name="userName" placeholder="User Name" value={state.userName} onChange={(e) => handleChange(e)} /><br /><br />
                <button onClick={() => setshowEditModel(false)} type="button" className="btn btn-Secondary">cancel</button> */}
                {/* <button type="button" onClick={update} className="btn btn-Secondary">edit</button> */}
              {/* </div>
              <div className="modal-footer">
                <button onClick={() => setshowEditModel(false)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button onClick={update} type="button" className="btn btn-primary">Edit</button>
              </div>
            </div> */}
          {/* </Modal> */}

          {/* <Modal isOpen={Modelfordelete}>
        <h3>ARE U SURE U WANT TO DELETE</h3>

        <button onClick={() => setModelfordelete(false)} type="button" className="btn btn-Secondary">cancel</button>
        <button type="button" onClick={handledelete} className="btn btn-Secondary">delete</button>
      </Modal>}
   
         
          {/* <EditModel
        show={showEditModel}
        onHide={() => setshowEditModel(false)}
      /> */}
       <ToastContainer />
          <DeleteModel
        show={Modelfordelete}
        onHide={() => setModelfordelete(false)}
      />
  {/* </Modal> */}
</>
   
  )
}


       