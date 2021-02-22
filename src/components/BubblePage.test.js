import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {ColorList as mockColorList} from './ColorList'

jest.mock('./ColorList')


test("Renders BubblePage without errors", async () => {
  // Finish this test
})

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading