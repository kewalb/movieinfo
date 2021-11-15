import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Alert from "@mui/material/Alert";

export default function TicTacToe() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  // const [board, setBoard] = useState([
  //     0,
  //     1,
  //     2,
  //     3,
  //     4,
  //     5,
  //     6,
  //     7,
  //     8,
  //   ]);

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log(a, b, c)

      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log("winner is: ", board[a]);
        return board[a];
      }
     
    }
    return null;
  };
  const winner = decideWinner(board);
  const [isXTurn, setIsXTurn] = useState(true);
  const handleClick = (index) => {
    if (winner === null && !board[index]) {
      // isXTurn ? 'X':'O'
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXTurn);
    }
  };

  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container maxWidth="sm" style={{ marginTop: 15 }}>
      <Grid container maxWidth="sm">
        {board.map((x, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <GameBox onPlayerClick={() => handleClick(index)} val={x} />
          </Grid>
        ))}
      </Grid>
      {winner ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <Alert severity="success">
            Winner {winner}
          </Alert>
        </Backdrop>
      ) : (
        ""
      )}
    </Container>
  );
}

function GameBox({ onPlayerClick, val }) {
  //   const [val, setVal] = useState("X");
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: "center",
    minHeight: 120,
  }));

  return (
    <Item
      onClick={onPlayerClick}
      style={{ color: val === "X" ? "red" : "green", cursor: "pointer" }}
    >
      <Typography variant="h2">{val}</Typography>
    </Item>
  );
}
