import { useDrawerStore } from "@/stores/drawerStore";

export function AvailabilityCard() {
  const { open: openDrawer } = useDrawerStore();

  const handleAvailabilityClick = () => {
    openDrawer();
  };

  return (
    <button
      onClick={handleAvailabilityClick}
      className="bento-no-min col-span-3 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
    >
      <h3 className="font-heading text-xl text-foreground text-center">
        OPEN TO WINTER &apos;26 – SUMMER &apos;27 SWE &amp; AI INTERNSHIPS
      </h3>
    </button>
  );
}