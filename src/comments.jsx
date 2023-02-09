import React from 'react'
import {useState  , useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Comments(props) {
    const postId = props.id;
    // console.log("comments", postId)
    const [comments , setComments] = useState([]);
    

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.id}`)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setComments(data);
        })
    },[])


  return (
    <div >
        {
           comments && comments.length > 0 && comments?.map((e) => {
                return(
                 <div>
                     <TableContainer component={Paper}>
      <Table  size="small" aria-label="a dense table">
   
        <TableBody>
         
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{textAlign:'justify' }} component="th" scope="row">
              {e.id}
              </TableCell>
              <TableCell align="right">       {e.body}</TableCell>
  
            </TableRow>
      
        </TableBody>
      </Table>
    </TableContainer>
            
                 </div>
                );
            })
        }
    </div>
  )
}
