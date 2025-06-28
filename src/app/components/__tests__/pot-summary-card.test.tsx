import PotSummaryCard from "../pot-summary-card";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, describe, it } from "vitest";

describe("PotSummaryCard", () => {
  it("renders pot name, amount, and color", () => {
    render(
      <PotSummaryCard
        potName="Emergency Fund"
        potAmount={500}
        potColour="bg-blue-500"
      />
    );

    expect(screen.getByText("Emergency Fund")).toBeInTheDocument();
    expect(screen.getByText("£500")).toBeInTheDocument();
    expect(screen.getByTestId("pot-colour-bar")).toHaveClass("bg-blue-500");
  });
});
