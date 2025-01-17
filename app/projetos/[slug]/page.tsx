import SlugProject from "@/app/components/projects/slug-project/SlugProject"

export default async function SlugProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    return (
        <SlugProject slug={slug} />
    )
}