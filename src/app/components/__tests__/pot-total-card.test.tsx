import PotTotalCard from "../pot-total-card";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, describe, it } from "vitest";

describe("PotTotalCard", () => {
  it("renders the total amount correctly", () => {
    render(<PotTotalCard total={850} />);
    const totalElement = screen.getByText("£850");
    expect(totalElement).toBeInTheDocument();
  });
});
