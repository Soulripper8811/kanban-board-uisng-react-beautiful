import { getAllTask } from "@/actions/Task.actions";
import MainPage from "@/components/MainPage";

export default async function Home() {
  const { tasks } = await getAllTask();
  return (
    <div className="h-full w-full items-center justify-center flex">
      <MainPage tasks={tasks} />
    </div>
  );
}
