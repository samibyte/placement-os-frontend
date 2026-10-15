import { BarChart3, CalendarCheck, FileText, Target } from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = [
  { icon: FileText, title: "Smart CV Builder", text: "Create and customize your CV for different job roles with AI suggestions." },
  { icon: Target, title: "Personalized Job Matches", text: "Get relevant job recommendations based on your skills, experience and goals." },
  { icon: CalendarCheck, title: "Track Your Applications", text: "Stay updated on your applications and never miss an opportunity." },
  { icon: BarChart3, title: "Career Insights", text: "Access tips, resources and analytics to grow your career faster." },
];

export default function Features() {
  return (
    <section className="border-t border-line/70 bg-white/40">
      <div className="mx-auto max-w-[1240px] px-6 py-14">
        <SectionHeader title="Everything You Need" subtitle="One platform to build your CV, find the right roles and follow every application." />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {features.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className={`flex items-start gap-4 lg:px-6 ${i > 0 ? "lg:border-l lg:border-line" : "lg:pl-0"}`}>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-500">
                <Icon size={20} />
              </span>
              <div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
