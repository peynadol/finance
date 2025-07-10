import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import PotsCard from "./pots-card";
import { Pot } from "@/lib/types";

type SortablePotCardProps = {
  pot: Pot;
};

const SortablePotCard = ({ pot }: SortablePotCardProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: pot.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`touch-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
    >
      <PotsCard pot={pot} />
    </div>
  );
};

export default SortablePotCard;
