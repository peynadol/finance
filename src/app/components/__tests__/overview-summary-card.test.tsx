import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, describe, it } from "vitest";
import OverviewSummaryCard from "../overview-summary-card";

describe("OverviewSummaryCard", () => {
  it("renders pot name, amount, and color", () => {
    render(
      <OverviewSummaryCard
        name="Emergency Fund"
        amount={500}
        colour="#ff0000"
      />
    );

    expect(screen.getByText("Emergency Fund")).toBeInTheDocument();
    expect(screen.getByText(/£500/)).toBeInTheDocument();
    expect(screen.getByTestId("colour-bar")).toHaveStyle({
      backgroundColor: "#ff0000",
    });
  });
});
