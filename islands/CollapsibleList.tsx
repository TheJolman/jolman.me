import { useSignal } from "@preact/signals";
import type { Signal } from "@preact/signals";

interface ListItem {
  title: string;
  content: string[];
}
interface CollapsibleListProps {
  items: ListItem[];
}

/**
 * Single item in collapsible list
 */
function Item({ item, index, activeIndex }: {
  item: ListItem;
  index: number;
  activeIndex: Signal<number | null>;
}) {
  const isActive = activeIndex.value === index;

  const toggleVisibility = () => {
    if (isActive) {
      activeIndex.value = null;
    } else {
      activeIndex.value = index;
    }
  };

  return (
    <div class="border-p border-gray-200">
      {/* Clickable header */}
      <button
        type="button"
        onClick={toggleVisibility}
        class="w-full flex justify-between items-center p-4 text-left focus:outline-none"
      >
        <span class="font-semibold text-lg">{item.title}</span>
        <span
          class={`transform transition-transform duration-300 ${
            isActive ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {/* Collapsible Content */}
      {isActive && (
        <div class="p-4 pt-0 text-gray-700">
          <ul class="list-disc list-inside space-y-2">
            {item.content.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function CollapsibleList({ items }: CollapsibleListProps) {
  const activeIndex = useSignal<number | null>(null);

  return (
    <div class="w-full max-w-xl mx-auto my-4 border border-gray-200 rounded-lg overflow-hidden">
      {items.map((item, index) => (
        <Item
          key={item.title}
          item={item}
          index={index}
          activeIndex={activeIndex}
        />
      ))}
    </div>
  )
}
