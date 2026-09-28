import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import { CheckCircle, User } from "@phosphor-icons/react/dist/ssr";
import { tentangKami } from "@/dictionaries/tentang-kami";
import { beranda } from "@/dictionaries/beranda";

const asset = (name) => `/brand_assets/${encodeURIComponent(name)}`;

const SIZES = {
  lg: { box: "h-28 w-28 sm:h-36 sm:w-36", icon: 40, card: "w-28 sm:w-44" },
  md: { box: "h-20 w-20 sm:h-28 sm:w-28", icon: 30, card: "w-24 sm:w-44" },
  sm: { box: "h-16 w-16 sm:h-20 sm:w-20", icon: 26, card: "w-24 sm:w-36" },
};

function PersonCard({ photo, name, title, size = "md" }) {
  const { box, icon, card } = SIZES[size];
  return (
    <div className={`flex ${card} flex-col items-center text-center`}>
      <div
        className={`relative flex ${box} shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-surface shadow-card ${
          photo ? "" : "bg-primary/10"
        }`}
      >
        {photo ? (
          <Image src={asset(photo)} alt={name || title} fill sizes="160px" className="object-cover" />
        ) : (
          <User size={icon} weight="fill" className="text-primary/50" aria-hidden="true" />
        )}
      </div>
      <p className="mt-4 font-heading text-[15px] font-extrabold text-ink">{name || title}</p>
      {name && <p className="mt-0.5 text-sm text-ink/60">{title}</p>}
    </div>
  );
}

export default function TentangKamiPage({ locale }) {
  const t = tentangKami[locale];
  const sambutan = beranda[locale].sambutan;
  const base = locale === "en" ? "/en" : "";

  const breadcrumb = [
    { label: locale === "en" ? "Home" : "Beranda", href: base || "/" },
    { label: t.title },
  ];

  return (
    <>
      <PageHeader breadcrumb={breadcrumb} eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      {/* Visi & Misi */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-heading text-sm font-bold text-secondary">{t.visiMisi.eyebrow}</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-xl bg-ink-deep p-8 shadow-card sm:p-10">
            <h2 className="font-heading text-lg font-extrabold text-white">{t.visiMisi.visiHeading}</h2>
            <p className="mt-4 text-[15px] leading-7 text-white/75">{t.visiMisi.visi}</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8 shadow-card sm:p-10">
            <h2 className="font-heading text-lg font-extrabold text-ink">{t.visiMisi.misiHeading}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {t.visiMisi.misi.map((item) => (
                <li key={item} className="flex gap-2.5 text-[15px] leading-7 text-ink/70">
                  <CheckCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sambutan Kepala Biro */}
      <section className="bg-surface-elevated">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-card">
              <Image
                src={asset("Kepala Biro Akademik.jpg")}
                alt={sambutan.photoAlt}
                fill
                sizes="(min-width: 1024px) 30vw, 70vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 hidden h-24 w-24 rounded-lg border-4 border-surface-elevated bg-primary sm:block" aria-hidden="true" />
          </div>

          <div>
            <p className="font-heading text-sm font-bold text-secondary">{sambutan.eyebrow}</p>
            <p className="mt-5 max-w-xl text-2xl font-light leading-[1.5] text-ink sm:text-[1.75rem]">
              “{sambutan.quote}”
            </p>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-ink/70">{sambutan.body}</p>
            <div className="mt-6">
              <p className="font-heading text-base font-extrabold text-ink">{sambutan.name}</p>
              <p className="text-sm text-ink/60">{sambutan.title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Pimpinan */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <p className="font-heading text-sm font-bold text-secondary">{t.leadership.eyebrow}</p>
          <h2 className="mt-3 font-heading text-2xl font-extrabold text-ink sm:text-3xl">{t.leadership.heading}</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-ink/60">{t.leadership.subtitle}</p>
        </div>

        <div className="mt-12 flex justify-center border-b border-border pb-12">
          <PersonCard
            photo={t.leadership.chief.photo}
            name={t.leadership.chief.name}
            title={t.leadership.chief.title}
            size="lg"
          />
        </div>

        <div className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-8 sm:gap-x-10">
          {t.leadership.heads.map((person) => (
            <PersonCard key={person.title} photo={person.photo} name={person.name} title={person.title} />
          ))}
        </div>
      </section>

      {/* Tim & Staf per Bagian */}
      <section className="bg-surface-elevated">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="text-center">
            <p className="font-heading text-sm font-bold text-secondary">{t.teams.eyebrow}</p>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-ink sm:text-3xl">{t.teams.heading}</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-ink/60">{t.teams.subtitle}</p>
          </div>

          <div className="mt-12 flex flex-col gap-16">
            {t.teams.groups.map((group) => {
              const soloStaff = group.staff.length === 1;
              return (
                <div key={group.name}>
                  <h3 className="font-heading text-base font-extrabold text-ink">{group.name}</h3>
                  <div className="mt-6 flex flex-wrap justify-center gap-10 sm:justify-start">
                    <PersonCard photo={group.head.photo} name={group.head.name} title={group.head.title} size="md" />
                    {soloStaff && (
                      <PersonCard
                        photo={group.staff[0].photo}
                        name={group.staff[0].name}
                        title={group.staff[0].title}
                        size="md"
                      />
                    )}
                  </div>
                  {!soloStaff && group.staff.length > 0 && (
                    <>
                      <p className="mt-8 font-heading text-sm font-bold text-ink/40">{t.teams.staffLabel}</p>
                      <div className="mt-4 flex flex-wrap justify-center gap-8 sm:justify-start">
                        {group.staff.map((person) => (
                          <PersonCard
                            key={person.title + (person.name || "")}
                            photo={person.photo}
                            name={person.name}
                            title={person.title}
                            size="sm"
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
