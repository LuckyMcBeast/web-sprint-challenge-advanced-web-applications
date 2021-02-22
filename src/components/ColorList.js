import React, { useState } from "react";
import axios from "axios";
import EditMenu from "./EditMenu"
import axiosWithAuth from "../helpers/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const getAndUpdateColors = () => {
    axiosWithAuth().get('/colors')
        .then(res => {
          updateColors(res.data)
        })
        .catch(error => console.log(error))
      }

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth().put(`/colors/${colorToEdit.id}`, colorToEdit)
      .then(getAndUpdateColors())
      .catch(error => console.log(error))
  };

  const deleteColor = color => {
    axiosWithAuth().delete(`/colors/${color.id}`)
      .then(getAndUpdateColors())
      .catch(error => console.log(error))
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...) Completed
//2. Complete the deleteColor functions by making a delete request for deleting colors. Completed