import GaleriDetailPage from "@/components/pages/GaleriDetailPage";

export default async function Page({ params }) {
  const { slug } = await params;
  return <GaleriDetailPage locale="en" slug={slug} />;
}
