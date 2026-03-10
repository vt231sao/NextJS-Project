import ArticleCard from '@/app/components/ArticleCard';

export default async function ArticlesPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await res.json();

    return (
        <div className="max-w-7xl mx-auto py-8">
            <h1 className="text-4xl font-extrabold mb-8 text-slate-800 border-b-4 border-brand-main inline-block pb-2">
                Latest Articles
            </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-6">
                {articles.slice(0, 12).map((article: any) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </div>
    );
}