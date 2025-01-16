import Cta from "@/components/cta";
import DemoComponent from "@/components/demo-component";
import PageHeader from "@/components/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar Components - Origin UI",
  description:
    "A collection of beautiful and accessible calendar components built with Tailwind CSS and Next.js.",
};

type Component = {
  name: string;
  className?: string;
};

const center = "flex justify-center items-start";
const components: Component[] = [
  { name: "comp-487", className: center },
  { name: "comp-490", className: center },
  { name: "comp-491", className: center },
  { name: "comp-488", className: center },
  { name: "comp-489", className: center },
  { name: "comp-492", className: center },
  { name: "comp-493", className: center },
  { name: "comp-495", className: center },
  { name: "comp-494", className: center },
  { name: "comp-496", className: center },
  { name: "comp-497", className: center },
  { name: "comp-498", className: center },
  { name: "comp-499", className: center },
  { name: "comp-500", className: center },
  { name: "comp-501", className: center },
  { name: "comp-502", className: center },
  { name: "comp-503", className: center },
  { name: "comp-504", className: center },
  // multiple mode
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Calendar">
            A growing collection of {components.length} calendar components built with Next.js and
            TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-0">
            {components.map((component) => {
              return (
                <DemoComponent
                  key={component.name}
                  componentName={component.name}
                  className={component.className}
                />
              );
            })}
          </div>

          <Cta />
        </div>
      </div>
    </main>
  );
}
