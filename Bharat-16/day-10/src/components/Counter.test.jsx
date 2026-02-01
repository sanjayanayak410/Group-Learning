import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("Counter renders correctly", () => {
  render(<Counter />);

  expect(screen.getByText("Counter App")).toBeInTheDocument();
});

test("Initial count is zero", () => {
  render(<Counter />);

  expect(screen.getByText("Count: 0")).toBeInTheDocument();
});

test("Count increases when button is clicked", () => {
  render(<Counter />);

  fireEvent.click(screen.getByText("Increase"));

  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Component Tests", () => {
  test("renders the counter heading", () => {
    render(<Counter />);
    const heading = screen.getByText("Counter Application");
    expect(heading).toBeInTheDocument();
  });

  test("initial count should be zero", () => {
    render(<Counter />);
    const text = screen.getByText("Current Count: 0");
    expect(text).toBeInTheDocument();
  });

  test("count increases when Increase button is clicked", () => {
    render(<Counter />);

    const increaseBtn = screen.getByText("Increase");
    fireEvent.click(increaseBtn);

    expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
  });

  test("count decreases when Decrease button is clicked", () => {
    render(<Counter />);

    const decreaseBtn = screen.getByText("Decrease");
    fireEvent.click(decreaseBtn);

    expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
  });

  test("count resets to zero when Reset button is clicked", () => {
    render(<Counter />);

    fireEvent.click(screen.getByText("Increase"));
    fireEvent.click(screen.getByText("Reset"));

    expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
  });
});
