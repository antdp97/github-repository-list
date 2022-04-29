import {
    fireEvent,
    render,
    getByLabelText,
    queryByTestId,
    getByText,
    getByTestId,
    findByTestId,
    findByText
} from '@testing-library/react';
// import GitHubRepoListPage from "../components/GitHubRepoListPage";
import React from "react";
import '@testing-library/jest-dom'
import App from "../App";

jest.mock('../')

describe('GitHubRepoList', () => {
    it('should search repo list when enter text in username field', async() => {
        const { container } = render(<App />)
        expect(queryByTestId(container,'repoItem0')).not.toBeInTheDocument();
        const inputSearchByUsername = getByLabelText(container, 'Search by username');
        fireEvent.change(inputSearchByUsername,{target: {value: 'phucan97vn'}});
        fireEvent.keyDown(inputSearchByUsername, {key: 'Enter', code: 'Enter', charCode: 13});
        expect(await findByTestId(container,'repoItem0')).toBeInTheDocument()
        expect(await findByText(container, 'phucan97vn')).toBeInTheDocument()
    })

    it('', () => {

    })
})
