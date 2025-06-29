import OverviewTransactionCard from "../overview-transaction-card";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, describe, it } from "vitest";

describe("OverviewTransactionCard", () => {
  it("renders transaction name, amount, and date", () => {
    render(
      <OverviewTransactionCard
        name="Emma Richardson"
        amount={100}
        date="19 Aug 2024"
      />
    );

    expect(screen.getByText("Emma Richardson")).toBeInTheDocument();
    expect(screen.getByText("+£100")).toBeInTheDocument();
    expect(screen.getByText("19 Aug 2024")).toBeInTheDocument();
  });
});
