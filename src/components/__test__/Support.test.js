import { screen, render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Support from '../Support';
import store from "../../redux/Store";

describe("Testing the Support Component", () => {

    const mockClick = jest.fn();

    const MockSupportComponent = ()=>{
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <Support open={false} onClick={mockClick}/>
                </Provider>
            </BrowserRouter>
        )
    }

    
    it("Should type in the input fields", async () => {
        render(<MockSupportComponent />);

        const buttonElement = await screen.findByRole("queryButton");
        fireEvent.click(buttonElement);

        const firstInputElement = await screen.findByPlaceholderText(/enter your full name/i);
        const secondInputElement = await screen.findByPlaceholderText(/write your query/i);
        fireEvent.change(firstInputElement, {target:{value:"qwerty"}});
        expect(firstInputElement.value).toBe("qwerty");
        fireEvent.change(secondInputElement, {target:{value:"query1"}});
        expect(secondInputElement.value).toBe("query1");
    });



    it("Should click to submit queries", async () => {
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
    });

})