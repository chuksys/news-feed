import React from "react"
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor, screen, act, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import Posts from "./Posts"


it("Posts component should load without crashing", () => {
    const { getByText } = render(<Posts/>)
    expect(getByText("Loading...")).toBeInTheDocument()
})