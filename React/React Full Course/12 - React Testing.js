// React Testing -
// --------------------------------------------------------------------------------------
// npm i vitest
// npm i -D @testing-library/react
// npm i -D jsdom
// npm i @testing-library/jest-dom
// npm i -D @types/jest
// npm i @testing-library/dom

// Create a vitest.config.ts
// --------------------------------------------------------------------------------------
// import { defineConfig } from "vitest/config";
//
// export default defineConfig({
//   test: {
//     environment: "jsdom",
//     globals: true,
//     setupFiles: "tests/setup.ts",
//   },
// });

// Tests/setup.ts
// --------------------------------------------------------------------------------------
// import "@testing-library/jest-dom";
//
//

// Tests/components/HelloWorld.test.ts
// --------------------------------------------------------------------------------------
// import { render, screen } from "@testing-library/react";
// import HelloWorld from "../../src/components/HelloWorld.tsx";
// import React from "react";
// describe("Hello World Component", () => {
//   it("Should render Hello World Component", () => {
//     render(<HelloWorld />);
//     expect(screen.getByText("Hello World")).toBeInTheDocument();
//   });
// });

// Array Test
// --------------------------------------------------------------------------------------
// Loop through code so a test for each array item
//

// ARIA (Accessible Rich Internet Applications) - explains what an element does or its
//                                                purpose
// --------------------------------------------------------------------------------------

// getByRole - query method used to find DOM elements by ARIA role
// --------------------------------------------------------------------------------------
// Test how accessible and interactive your app is
// getByRole(role (button, link, textbox, heading), options (additional configuartion))
//
// Example 1:
// const FindingElementsByRole = () => {
//   return (
//     <div>
//       {/* ARIA: Link */}
//       <a href="/">Link</a>
//       {/* ARIA: Button */}
//       <button>Button</button>
//       {/* ARIA: ContentInfo */}
//       <footer>ContentInfo</footer>
//       {/* ARIA: Heading */}
//       <h1>Heading</h1>
//       {/* ARIA: Banner */}
//       <header>Banner</header>
//       {/* ARIA: Img */}
//       <img alt="description" /> Img
//       {/* ARIA: Checkbox */}
//       <input type="checkbox" /> Checkbox
//       {/* ARIA: Spinbutton */}
//       <input type="number" /> Spinbutton
//       {/* ARIA: Radio */}
//       <input type="radio" /> Radio
//       {/* ARIA: Textbox */}
//       <input type="text" /> Text
//       {/* ARIA: List */}
//       <ul>Listitem</ul>
//       {/* ARIA: ListItem */}
//       <li>List</li>
//       {/* --------------------- */}
//       <button>Learn More</button>
//       <button>Submit</button>
//     </div>
//   );
// };
//
//
//
// export default FindingElementsByRole;
// describe("FindElementsByRole", () => {
//   it("should query the link element", () => {
//     render(<FindingElementsByRole />);
//     expect(screen.getByRole("link")).toBeInTheDocument();
//   });

//   it("should query the button element", () => {
//     render(<FindingElementsByRole />);
//     expect(screen.getByRole("button")).toBeInTheDocument();
//   });
//
// -----------------------
// describe("FindElementsByRole", () => {
//   it("should find elements by their roles", () => {
//     render(<FindingElementsByRole />);
//
//     const roles = [
//       "link",
//       "button",
//       "contentinfo",
//       "heading",
//       "banner",
//       "img",
//       "checkbox",
//       "spinbutton",
//       "radio",
//       "textbox",
//       "list",
//       "listitem",
//     ];
//
//     roles.map((role) => expect(screen.getByRole(role)).toBeInTheDocument());
//   });
// });
//
// -----------------------------------
//
//

// User Interaction
// --------------------------------------------------------------------------------------
// describe("TodoList", () => {
//   it("renders TodoList with an input and a button", () => {
//     render(<TodoList />);
//     expect(screen.getByPlaceholderText("Enter new todo")).toBeInTheDocument();
//     expect(screen.getByText("Add Todo")).toBeInTheDocument();
//   });
//   it("can add a todo item", async () => {
//     render(<TodoList />);
//     const input = screen.getByPlaceholderText("Enter new todo");
//     const button = screen.getByText("Add Todo");
//     await userEvent.type(input, "New Todo");
//     await userEvent.click(button);
//     expect(screen.getByText("New Todo")).toBeInTheDocument();
//   });
//   it("can mark a todo as completed", async () => {
//     render(<TodoList />);
//     const input = screen.getByPlaceholderText("Enter new todo");
//     const button = screen.getByText("Add Todo");
//     await userEvent.type(input, "New Todo");
//     await userEvent.click(button);
//     const checkbox = screen.getByRole("checkbox");
//     expect(checkbox).not.toBeChecked();
//     await userEvent.click(checkbox);
//     expect(checkbox).toBeChecked();
//     const todoItem = screen.getByText("New Todo");
//     expect(todoItem).toHaveStyle("text-decoration: line-through");
//   });
//   it("can delete a todo item", async () => {
//     render(<TodoList />);
//     const input = screen.getByPlaceholderText("Enter new todo");
//     const button = screen.getByText("Add Todo");
//     await userEvent.type(input, "New Todo");
//     await userEvent.click(button);
//     const deleteButton = screen.getByText("Delete");
//     await userEvent.click(deleteButton);
//     await waitFor(() => {
//       expect(screen.queryByText("New Todo")).not.toBeInTheDocument();
//     });
//
//
//

// Data Fetching
// --------------------------------------------------------------------------------------
// import { render, screen } from "@testing-library/react";
// import TodoList from "../../src/components/TodoList";
// import { server } from "../mocks/server";
// import { http, HttpResponse } from "msw";
//
// describe("TodoList", () => {
//   it("should render a list of todos", async () => {
//     render(<TodoList />);
//     const todos = await screen.findAllByRole("listitem");
//     expect(todos.length).toBeGreaterThan(0);
//   });
//
//   it("should render no todos available if no todo is found", async () => {
//     server.use(
//       http.get("https://jsonplaceholder.typicode.com/todos", () =>
//         HttpResponse.json([])
//       )
//     );
//
//     render(<TodoList />);
//     const noTodos = await screen.findByText(/no todos/i);
//     expect(noTodos).toBeInTheDocument();
//   });
//
//   it("should render a loading if products are loading", () => {
//     render(<TodoList />);
//     const loading = screen.getByText(/loading/i);
//     expect(loading).toBeInTheDocument();
//   });
// });
//
//

// QueryBy
// --------------------------------------------------------------------------------------
// it("should query all by role", () => {
//   render(<QueryAllByQueries />);
//   const buttons = screen.queryAllByRole("button");
//   const alerts = screen.queryAllByRole("alert");
//   const regions = screen.queryAllByRole("region");

//   expect(buttons).toHaveLength(2);
//   expect(alerts).toHaveLength(2);
//   expect(regions).toHaveLength(2);
// });
