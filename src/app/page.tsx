import SectionA from "@/components/sections/SectionA";
import SectionB from "@/components/sections/SectionB";
import SectionC from "@/components/sections/SectionC";
import SectionD from "@/components/sections/SectionD";
import SectionE from "@/components/sections/SectionE";
import SectionF from "@/components/sections/SectionF";
import LogoUi from "@/components/ui/LogoUi";
import StarUi from "@/components/ui/StarUi";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col border-red-500 items-center relative justify-between gap-[1rem]">
      <LogoUi />
      <StarUi/>
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
      <SectionF />
    </main>
  );
}
