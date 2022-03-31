// this test file is made mainly to check the query list page

import { screen, render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import NavBarComp from '../NavBarComp';
import Support from '../Support';
import QueryList from '../QueryList';
import store from "../../redux/Store";

describe("Testing the NavBar Component", () => {

    const MockNavBarComponent = ()=>{
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <NavBarComp />
                </Provider>
            </BrowserRouter>
        )
    }

    const mocksupportClick = jest.fn();
    const MockSupportComponent = ()=>{
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <Support open={false} onClick={mocksupportClick}/>
                </Provider>
            </BrowserRouter>
        )
    }

    const MockQueryListComponent = ()=>{
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <QueryList />
                </Provider>
            </BrowserRouter>
        )
    }

    it("Should click the querybutton to open the form in Support Component then check the data in QueryList", async () => {
        render(<MockNavBarComponent />);

        const navLinkElement = await screen.findByRole("supportSection");
        fireEvent.click(navLinkElement);


        render(<MockSupportComponent />);
        const buttonElement = await screen.findByRole("queryButton");
        fireEvent.click(buttonElement);

        const firstInputElement = await screen.findByPlaceholderText(/enter your full name/i);
        const secondInputElement = await screen.findByPlaceholderText(/write your query/i);
        fireEvent.change(firstInputElement, {target:{value:"qwerty"}});
        expect(firstInputElement.value).toBe("qwerty");
        fireEvent.change(secondInputElement, {target:{value:"query1"}});
        expect(secondInputElement.value).toBe("query1");

        const submitButtonElement = await screen.findByRole("submitButton");
        fireEvent.click(submitButtonElement);
        expect(firstInputElement.value).toBe("");
        expect(secondInputElement.value).toBe(""); 

        render(<MockQueryListComponent />);
        expect(await screen.findByText("qwerty")).toBeInTheDocument;
        expect(await screen.findByText("query1")).toBeInTheDocument;
    });

})