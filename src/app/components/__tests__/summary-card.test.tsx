import SummaryCard from "../summary-card";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("SummaryCard", () => {
  it("renders with title and amount", () => {
    render(<SummaryCard title="Current Balance" amount={100} />);
    const title = screen.getByText("Current Balance");
    const amount = screen.getByText("£100");
    expect(title).toBeInTheDocument();
    expect(amount).toBeInTheDocument();
  });

  it("applies correct styles for balance card", () => {
    const { container, rerender } = render(
      <SummaryCard title="Current Balance" amount={100} />
    );
    const card = container.firstChild;
    expect(card).toHaveClass("bg-grey-900", "text-white");

    rerender(<SummaryCard title="Other Card" amount={200} />);
    expect(card).toHaveClass("bg-white", "text-grey-900");
  });
});
