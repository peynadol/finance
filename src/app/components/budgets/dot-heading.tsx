import { Ellipsis } from "lucide-react";
//TODO: hook ellipsis up to a dropdown menu
const DotHeading = ({ label, color }: { label: string; color: string }) => (
  <div className="flex items-center gap-2 justify-between">
    <div className="flex items-center gap-2">
      <div className={`h-3 w-3 rounded-full ${color}`} />
      <h2 className="text-preset-2 text-grey-900">{label}</h2>
    </div>
    <div>
      <Ellipsis className="text-grey-500" />
    </div>
  </div>
);

export default DotHeading;
