import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import { useModalStore } from "@/lib/stores/modalStore";
import { usePathname } from "next/navigation";
import { Budget, Pot } from "@/lib/types";

type DotHeadingProps = {
  data: Budget | Pot;
  transactionCategories?: string[];
};

const DotHeading = ({ data, transactionCategories }: DotHeadingProps) => {
  console.log("Transaction Categories from DotHeading:", transactionCategories);
  const { openModal } = useModalStore();
  const pathname = usePathname();
  if (!data) {
    console.warn("DotHeading: No data provided");
    return null;
  }
  const isBudgetPage = pathname.startsWith("/budgets");

  // note: this cast is needed because Budget uses `category` and Pot uses `name`.
  // would be cleaner to standardize field naming or normalize before passing in.
  const label = isBudgetPage ? (data as Budget).category : (data as Pot).name;
  const color = data.theme;
  const handleEdit = () => {
    if (isBudgetPage) {
      console.log(transactionCategories);
      openModal("EDIT_BUDGET", {
        ...data,
        transactionCategories,
      });
    } else {
      openModal("EDIT_POT", data);
    }
  };

  const handleDelete = () => {
    openModal(isBudgetPage ? "DELETE_BUDGET" : "DELETE_POT", {
      id: data.id,
      name: label,
    });
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <div
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: color }}
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
          <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
          <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DotHeading;
