import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProfileCard from "./ProfileCard";

describe("ProfileCard Component", () => {
  test("renders name and role", () => {
    render(<ProfileCard />);
    expect(screen.getByText("Bharat Prusty")).toBeInTheDocument();
    expect(screen.getByText("React Developer")).toBeInTheDocument();
  });

  test("initial follower count is 0", () => {
    render(<ProfileCard />);
    const count = screen.getByTestId("follower-count");
    expect(count).toHaveTextContent("0");
  });

  test("increments followers on Follow click", async () => {
    render(<ProfileCard />);
    const user = userEvent.setup();

    const followBtn = screen.getByText("Follow");
    const count = screen.getByTestId("follower-count");

    await user.click(followBtn);
    expect(count).toHaveTextContent("1");
  });

  test("decrements followers on Unfollow click", async () => {
    render(<ProfileCard />);
    const user = userEvent.setup();

    const unfollowBtn = screen.getByText("Unfollow");
    const count = screen.getByTestId("follower-count");

    await user.click(unfollowBtn);
    expect(count).toHaveTextContent("-1");
  });
});
