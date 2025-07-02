import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
//TODO: hook ellipsis up to a dropdown menu
const DotHeading = ({ label, colour }: { label: string; colour: string }) => (
  <div className="flex items-center gap-2 justify-between">
    <div className="flex items-center gap-2">
      <div
        className="h-3 w-3 rounded-full"
        style={{ backgroundColor: colour }}
      />
      <h2 className="text-preset-2 text-grey-900">{label}</h2>
    </div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="p-1 rounded-full hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
          aria-label="Open options"
        >
          <Ellipsis className="text-grey-500" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => console.log("Edit")}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("Delete")}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

export default DotHeading;
