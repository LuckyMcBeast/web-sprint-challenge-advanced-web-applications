import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {getColorsWithAxios as mockGetColorsWithAxios} from '../helpers/getColorsWithAxios'

jest.mock('../helpers/getColorsWithAxios')

const mockColorData = {
  data: [
    {
      color: "aliceblue",
      code: { hex: "#f0f8ff"},
      id: 1
    },
    {
      color: "limegreen",
      code: { hex: "#99ddbc"},
      id: 2
    },
    {
      color: "aqua",
      code: {hex: "#00ffff"},
      id: 3
    }
  ]
}

test("Renders BubblePage without errors", async () => {
  // Finish this test
  mockGetColorsWithAxios.mockResolvedValueOnce(mockColorData);
    const {rerender} = render(<BubblePage/>);
    
    await waitFor(() => {
      rerender(<BubblePage/>); 
    });
    screen.debug();
    const colorName = screen.getByText(/aliceblue/i);
    expect(colorName).toBeInTheDocument(); 
})

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  const errorMessage = {error: 'API is currently unavailable for color request'}
  mockGetColors.mockRejectedValueOnce(errorMessage);
  const {rerender} = render(<BubblePage/>);
  
  await waitFor(() => {
    rerender(<BubblePage/>); 
  });
  screen.debug();
  const colorName = screen.queryByText(/aqua/i);
  expect(colorName).not.toBeTruthy(); 
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading