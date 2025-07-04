import React from "react";
import { AppButton } from "../app-button";

const PotButtonContainer = () => {
  return (
    <div className="flex items-center gap-4">
      <AppButton variant="secondary" className="flex-1">
        + Add Money
      </AppButton>

      <AppButton variant="secondary" className="flex-1">
        Withdraw
      </AppButton>
    </div>
  );
};

export default PotButtonContainer;
