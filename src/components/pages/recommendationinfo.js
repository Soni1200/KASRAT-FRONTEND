import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function Recommend(props) {
  const { supplement1, supplement2, supplement3, supplement1score, supplement2score, supplement3score } = props;
    const rows = [
      createData('1', supplement1, supplement1score),
      createData('2', supplement2, supplement2score),
      createData('3', supplement3, supplement3score)
    ];
  
    return (
      <TableContainer component={Paper} align="center">
        <Table sx={{ minWidth: 650 }} aria-label="nutrition table">
          <TableHead>
            <TableRow>
              <TableCell>Supplement No</TableCell>
              <TableCell>Supplement Suggested</TableCell>
              <TableCell>Score</TableCell>
              {/* <TableCell align="right">% Daily Value</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.supplement}</TableCell>
                <TableCell>{row.score}</TableCell>
                {/* <TableCell align="right">{row.dailyValue}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  function createData(name, supplement, score) {
    return { name, supplement, score };
  }
  
  export default Recommend;
