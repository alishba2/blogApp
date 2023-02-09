import React from 'react'
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Author() {
    const [author, setAuthor] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                console.log("Authors", data)
                setAuthor(data);
            })
    }, [])
    return (
        <div>
       
             
        
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>name</TableCell>
                                        <TableCell align="right">username</TableCell>
                                        <TableCell align="right">email</TableCell>
                                        <TableCell align="right">phone</TableCell>
                                        <TableCell align="right">website</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {author.map((e) => (
                                        <TableRow
                                           
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                            {e.name}
                                            </TableCell>
                                            <TableCell align="right">{e.username}</TableCell>
                                            <TableCell align="right">{e.email}</TableCell>
                                            <TableCell align="right">{e.phone}</TableCell>
                                            <TableCell align="right">{e.website}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
             
            
      

        </div>
    )
}
