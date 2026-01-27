import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter Component", () => {
  test("renders counter heading", () => {
    render(<Counter />);
    expect(screen.getByText(/react counter/i)).toBeInTheDocument();
  });

  test("initial count should be 0", () => {
    render(<Counter />);
    const countValue = screen.getByTestId("count-value");
    expect(countValue).toHaveTextContent("0");
  });

  test("increments count when increment button is clicked", async () => {
    render(<Counter />);
    const user = userEvent.setup();

    const incrementBtn = screen.getByText("+ Increment");
    const countValue = screen.getByTestId("count-value");

    await user.click(incrementBtn);
    expect(countValue).toHaveTextContent("1");

    await user.click(incrementBtn);
    expect(countValue).toHaveTextContent("2");
  });

  test("decrements count when decrement button is clicked", async () => {
    render(<Counter />);
    const user = userEvent.setup();

    const decrementBtn = screen.getByText("- Decrement");
    const countValue = screen.getByTestId("count-value");

    await user.click(decrementBtn);
    expect(countValue).toHaveTextContent("-1");
  });
});
