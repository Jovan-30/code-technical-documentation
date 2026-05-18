import { render, screen } from "@testing-library/react";
import UserStatus from "../../src/components/UserStatus.tsx";
import React from "react";

describe("User Status Component", () => {
  it("Should render Hello World Component", () => {
    render(<UserStatus text="Bob" />);

    const welcomeMessage = screen.getByText(/Welcome/i);
    expect(welcomeMessage).toBeInTheDocument();
  });
});
