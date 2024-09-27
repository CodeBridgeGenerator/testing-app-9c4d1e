import React from "react";
import { render, screen } from "@testing-library/react";

import NofityPage from "../NofityPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders nofity page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <NofityPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("nofity-datatable")).toBeInTheDocument();
    expect(screen.getByRole("nofity-add-button")).toBeInTheDocument();
});
