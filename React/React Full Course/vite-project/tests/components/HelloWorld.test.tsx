import { render, screen } from "@testing-library/react";
import HelloWorld from "../../src/components/HelloWorld.tsx";
import React from "react";

describe("Hello World Component", () => {
  it("Should render Hello World Component", () => {
    render(<HelloWorld />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
