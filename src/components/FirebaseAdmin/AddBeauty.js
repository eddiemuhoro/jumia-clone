import { Button, FormControl, TextField } from '@material-ui/core'
import { addDoc, collection } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useState } from 'react'
import { db } from '../../lib/init-firebase'

const AddBeuty = () => {
    const [name, setName]= useState('')
    const [currentPrice, setCurrentPrice]= useState('')
    const [prevPrice, setPrevPrice]= useState('')
    const [desc, setDesc]= useState('')
    const [rating, setRating]= useState('')
    const [isFile, setFile] = useState(null)
    const handleImageAsFile=e=>{
        setFile(e.target.files[0])
    }


   
    //insert to firebase-----------------------
    const handleSubmit= async(e) => {
      try {
        e.preventDefault();
        let file = isFile;

          //storage for images
        const storage= getStorage();
        var storagePath = 'products/' + file.name;
        const storageRef = ref(storage, storagePath);
        const uploadTask = uploadBytesResumable(storageRef, file);

        //progress of uploads
        uploadTask.on('state_changed', (snapshot)=>{
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is '+ progress + '% done');
        },
        (error) => {
          console.log(error)
        },
        ()=>{
          //get the image url 
          getDownloadURL(uploadTask.snapshot.ref)
          .then((imageUrl)=>{
            console.log('file available at' , imageUrl);
            const resourceCollectionRef = collection(db, 'beauty')
            //add values to firestore firebase
            if(name=== '' || desc ===''){
              return
            }
             addDoc(resourceCollectionRef, {imageUrl, name , prevPrice , currentPrice, rating, desc})
             setFile(null);
          })
        }
        )
        alert('success')
      } catch (error) {
        throw error
      }
    }

  return (
    <div>
    <h2>Beuty Products</h2>
    <FormControl className='form-control'>
        
        <TextField 
        required
        className='input'
        margin='dense'
        label='Product name'
        variant='outlined'
        placeholder='Name'
        value={name}
         id="name" 
         type='text' 
         aria-describedby="my-helper-text"
          onChange={e => setName( e.target.value)} />

        <TextField
        margin='dense'
         variant='outlined'
            placeholder=' Role'
        title='desc'
         id="desc" 
         type='text' 
         aria-describedby="my-helper-text"
          label="Product Description"
          value= {desc}
          onChange={e => setDesc(e.target.value)} />

 
    <TextField
          margin='dense'
          variant='outlined'
          title='Current Price'
          id="email" 
          type='number' 
          aria-describedby="my-helper-text"
          label='Current Price'
            value= {currentPrice}
          onChange={e => setCurrentPrice(e.target.value)} />

<TextField
          margin='dense'
          variant='outlined'
          title='prevPrice'
          id="PrePrice" 
          type='number' 
          aria-describedby="my-helper-text"
          label='Previous Price'
            value= {prevPrice}
          onChange={e => setPrevPrice(e.target.value)} />

<TextField
          margin='dense'
          variant='outlined'
          title='Rating'
          id="rating" 
          type='text' 
          aria-describedby="my-helper-text"
          label='Product Rating'
            value= {rating}
          onChange={e => setRating(e.target.value)} />

     

     
        <TextField id='file' type="file" accept=".png, .jpg, .jpeg" onChange={handleImageAsFile} label='' variant='outlined' />


       <Button variant="contained" margin='dense' color="primary"  onClick={handleSubmit}>Submit</Button>
    </FormControl>
   
</div>
  )
}

export default AddBeuty