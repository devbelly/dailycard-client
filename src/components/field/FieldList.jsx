import React from "react";
import Box from "@mui/material/Box";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useFields } from "./hooks/useFields";

const FieldList = ({ selectedId, setSelectedId }) => {
  const fields = useFields();

  const handleClick = (id) => {
    setSelectedId(id);
  };

  return (
    <Box style={{ height: 2000 }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Word</TableCell>
              <TableCell>Mean</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fields.map((row, idx) => (
              <TableRow selected={selectedId === row.id} key={row.idx}>
                <TableCell onClick={() => handleClick(row.id)}>
                  {row.word}
                </TableCell>
                <TableCell onClick={() => handleClick(row.id)}>
                  {row.mean}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FieldList;
