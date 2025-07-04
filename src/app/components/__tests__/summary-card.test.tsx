import SummaryCard from "../summary-card";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("SummaryCard", () => {
  it("renders with title and amount", () => {
    render(<SummaryCard label="Current Balance" amount={100} />);
    
    // check title text
    const title = screen.getByText("Current Balance");
    expect(title).toBeInTheDocument();

    // check amount text, accounting for split nodes or formatting
    const amount = screen.getByText((content) =>
      content.replace(/\s/g, "") === "£100.00"
    );
    expect(amount).toBeInTheDocument();
  });

  it("applies correct styles for balance card", () => {
    const { container, rerender } = render(
      <SummaryCard label="Current Balance" amount={100} />
    );

    const card = container.firstChild;
    expect(card).toHaveClass("bg-grey-900", "text-white");

    rerender(<SummaryCard label="Other Card" amount={200} />);
    expect(card).toHaveClass("bg-white", "text-grey-900");
  });
});

