import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function Recommend(props) {
    const { supplement1, supplement2, supplement3 } = props;
    const rows = [
      createData('1', supplement1),
      createData('2', supplement2),
      createData('3',supplement3)
    ];
  
    return (
      <TableContainer component={Paper} align="center">
        <Table sx={{ minWidth: 650 }} aria-label="nutrition table">
          <TableHead>
            <TableRow>
              <TableCell>Supplement No</TableCell>
              <TableCell>Supplement Suggested</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              {/* <TableCell align="right">% Daily Value</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.supplement1}</TableCell>
                <TableCell>{row.supplement2}</TableCell>
                <TableCell>{row.supplement3}</TableCell>
                {/* <TableCell align="right">{row.dailyValue}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  function createData(name, supplement1, supplement2, supplement3) {
    return { name, supplement1, supplement2,supplement3};
  }
  
  export default Recommend;
