import { createFileRoute, Outlet } from "@tanstack/react-router";
import { BottomTabs } from "@/components/BottomTabs";

export const Route = createFileRoute("/_tabs")({
  component: TabsLayout,
});

function TabsLayout() {
  return (
    <div className="bg-app min-h-screen">
      <Outlet />
      <BottomTabs />
    </div>
  );
}
