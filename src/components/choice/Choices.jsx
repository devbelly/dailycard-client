import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
const Choices = ({ template, selectedIndex, setSelectedIndex }) => {
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {template.choices.map((choice, idx) => (
              <TableRow key={idx} selected={choice.id === selectedIndex}>
                <TableCell
                  component="th"
                  scope="row"
                  onClick={() => {
                    setSelectedIndex(choice.id);
                  }}
                >
                  {idx}
                </TableCell>
                <TableCell>{choice.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Choices;
