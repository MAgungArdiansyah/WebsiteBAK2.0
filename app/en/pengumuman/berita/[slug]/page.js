import BeritaDetailPage from "@/components/pages/BeritaDetailPage";

export default async function Page({ params }) {
  const { slug } = await params;
  return <BeritaDetailPage locale="en" slug={slug} />;
}
