import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function Recommend(props) {
  const {
    supplement1,
    supplement2,
    supplement3,
    supplement1score,
    supplement2score,
    supplement3score,
    probability1,
    probability2,
    probability3,
    probability4,
    probability5,
    probability6,
    probability7,
    probability8,
    probability9,
    probability10,
    allsuppscores1,
    allsuppscores2,
    allsuppscores3,
    allsuppscores4,
    allsuppscores5,
    allsuppscores6,
    allsuppscores7,
    allsuppscores8,
    allsuppscores9,
    allsuppscores10,
    allsupplementnames1,
    allsupplementnames2,
    allsupplementnames3,
    allsupplementnames4,
    allsupplementnames5,
    allsupplementnames6,
    allsupplementnames7,
    allsupplementnames8,
    allsupplementnames9,
    allsupplementnames10,
  } = props;

  const rows = [
    createData('1', supplement1, supplement1score),
    createData('2', supplement2, supplement2score),
    createData('3', supplement3, supplement3score),
  ];

  const rows1 = [
    createDataDetail(allsupplementnames1, allsuppscores1, probability1),
    createDataDetail(allsupplementnames2, allsuppscores2, probability2),
    createDataDetail(allsupplementnames3, allsuppscores3, probability3),
    createDataDetail(allsupplementnames4, allsuppscores4, probability4),
    createDataDetail(allsupplementnames5, allsuppscores5, probability5),
    createDataDetail(allsupplementnames6, allsuppscores6, probability6),
    createDataDetail(allsupplementnames7, allsuppscores7, probability7),
    createDataDetail(allsupplementnames8, allsuppscores8, probability8),
    createDataDetail(allsupplementnames9, allsuppscores9, probability9),
    createDataDetail(allsupplementnames10, allsuppscores10, probability10),
  ];

  return (
    <div>
      <TableContainer component={Paper} align="center">
        <Table sx={{ minWidth: 650 }} aria-label="nutrition table">
          <TableHead>
            <TableRow>
              <TableCell>Supplement No</TableCell>
              <TableCell>Supplement Suggested</TableCell>
              <TableCell>Score</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} align="center" style={{ marginTop: '20px' }}>
      <Table sx={{ minWidth: 650 }} aria-label="detailed nutrition table">
          <TableHead>
            <TableRow>
              <TableCell>Supplement Name</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Probability</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows1.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  {row.name}
                </TableCell>
                <TableCell>{row.score}</TableCell>
                <TableCell>{row.probability}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

function createData(name, supplement, score) {
  return { name, supplement, score };
}

function createDataDetail(name, score, probability) {
  return {name, score, probability };
}

export default Recommend;
