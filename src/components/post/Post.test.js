import React from "react"
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor, screen, act, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import Post from "./Post"


it("Post component should load without crashing", () => {
    const post = {
        title: "This is the post title",
        description: "This is the post description",
        likesCount: 20
    }
    const { getByText } = render(<Post post={post}/>)
    expect(getByText("This is the post title")).toBeInTheDocument()
    expect(getByText("This is the post description")).toBeInTheDocument()
    expect(getByText("20")).toBeInTheDocument()
})