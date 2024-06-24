import  { useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from '@mui/material';
import '../App.css'
const headCells = [
  { id: 'city', numeric: false, label: 'Ciudad' },
  { id: 'country', numeric: false, label: 'País' },
 ];

const EnhancedTable = ({ weatherData }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('date');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell key={headCell.id}>
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={() => handleRequestSort(headCell.id)}
                    >
                      {headCell.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {weatherData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>{row.country}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
  );
};

export default EnhancedTable;
