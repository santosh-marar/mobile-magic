import { Appbar } from "@/components/Appbar";
import { Prompt } from "@/components/Prompt";
import { ProjectsDrawer } from "@/components/ProjectsDrawer";

export default function Home() {
  return (
    <div className="p-4 md:pt-8 relative overflow-hidden">
			<div className="absolute -top-56 -right-28 size-96 md:w-3xl md:-right-64 md:-top-64 -z-30 rounded-full bg-radial from-red-00 to-red-500 blur-3xl" />

      <Appbar />
      <ProjectsDrawer />
      <div className="max-w-2xl mx-auto pt-32 md:pt-52">
        <div className="text-5xl font-bold text-center">
          What do you want to build?
        </div>
        <div className="font-space-grotesk text-muted-foreground text-center p-2">
          Prompt, click generate and watch your app come to life
        </div>
        <div className="pt-4">
          <Prompt />
        </div>
      </div>
   </div>
  );
}
