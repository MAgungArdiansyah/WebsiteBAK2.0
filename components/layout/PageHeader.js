import Breadcrumb from "@/components/layout/Breadcrumb";

export default function PageHeader({ breadcrumb, eyebrow, title, subtitle }) {
  return (
    <header className="border-b border-border bg-surface-elevated">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumb items={breadcrumb} />
        {eyebrow && <p className="mt-4 font-heading text-sm font-bold text-secondary">{eyebrow}</p>}
        <h1 className="mt-2 font-heading text-3xl font-extrabold text-ink sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-[15px] leading-7 text-ink/60">{subtitle}</p>}
      </div>
    </header>
  );
}
