import React, { useState, useEffect } from 'react'
import axios from "axios"
// import Modal from 'react-modal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Frontpage.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
// import FileBase from 'react-file-base64';

function App() {

  const [state, setState] = useState({
    image: "",
    name: "",
    discription: ""
   
  })

  // const [newstate, setnewState] = useState({
  //   id:""
  // })

  // const [modelforedit, setModelforedit] = useState(false)

  // const [documents, setDocuments] = useState([])
  const URL =  "https://sweetmemoriesreactjs.herokuapp.com";




  // image upload
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setState({ ...state, image: base64 });
  };

  // handle change
  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }




  const handleSubmit = e => {
    e.preventDefault();

    let formData = { ...state }
    console.log(formData)

    axios.post(`${URL}/createUser`, formData)
      .then(() => {
        console.log("A new user has been successfully added.")
        // alert("A NEW USER HAS BEEN CREATED")
        toast.success("User added Succesfullty!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch(err => {
        console.error(err)
        toast.error("there is some error", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })

    // console.log(formData)
  }

  //   const editmodel = (doc) =>{
  //     setnewState({
  //       // name: doc.name ,
  //       // age: doc.age,
  //       // userName: doc.userName,
  //       id:doc.id
  //     })




  //     setModelforedit(true)
  // // console.log("im clicked")

  //   console.log(state)

  //   }



  // const  update = e =>{
  //   e.preventDefault();
  //   let newData = { id: newstate._id,  name: "Ahmad", age: 25  }


  //   axios.put(`${URL}/updateUser`, newData)
  //     .then((res) => {
  //       console.log("message from server", res.data)
  //       alert("User has been successfully updated.")
  //     })
  //     .catch((err) => {
  //       console.error(err)
  //       console.log(newData)
  //     })

  //     setModelforedit(false)
  //  }



  return (
    <div className="background">


      <form onSubmit={handleSubmit}>

        <label for="name">Add image </label>
        <h6>first add image and then other fields</h6>
        <div> <input type="file" className="form-control-file bg-success " id="file" name='image'

          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
        /></div>
        <label for="name">Title</label>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} /><br /><br />
        {/* <label for="Age">AGE</label>
        <input type="number" name="age" placeholder="Age" onChange={handleChange} /><br /><br /> */}
        {/* <label for="username">Discription</label>
        <input type="text" name="userName" placeholder="User Name" onChange={handleChange} /><br /><br /> */}
        {/* <div class="form-floating">
        <label for="floatingTextarea">Discription</label>
          <textarea class="form-control" type="text" name="discription" placeholder="Leave a comment here"  onChange={handleChange}/>
          
        </div> */}
        <div className='textarea'>
        <label for="name">Discription</label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          name="discription"
          placeholder="Leave a comment here"
          onChange={handleChange}
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      </div>
        {/* <FileBase
           type = "file"
           multiple= {false}
           onDone ={({base64})=> setState{}}
           
           /> */}


        <button >ADD </button>
      </form>
      <hr />



      <ToastContainer />

    </div>


  );
}

export default App;