import { render, screen } from "@testing-library/react";
import { AppButton } from "../app-button";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("AppButton", () => {
  it("renders with text content", () => {
    render(<AppButton>Click Me</AppButton>);
    const button = screen.getByRole("button", { name: "Click Me" });
    expect(button).toBeInTheDocument();
  });

  it("applies tertiary icon only when variant is tertiary", () => {
    const { rerender, container } = render(
      <AppButton variant="tertiary">View</AppButton>
    );
    expect(container.querySelector("svg")).toBeInTheDocument();

    rerender(<AppButton variant="primary">View</AppButton>);
    expect(container.querySelector("svg")).not.toBeInTheDocument();
  });

  it("calls onClick handler when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<AppButton onClick={handleClick}>Click Me</AppButton>);

    const button = screen.getByRole("button", { name: "Click Me" });
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
