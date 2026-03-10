export default async function Page() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const posts = await res.json()
    return <div>
        <h2 className="text-xl font-bold mb-4">Всі статті</h2>
        <ul className="space-y-2">
            {posts.slice(0, 10).map((article: any) => (
                <li key={article.id} className="p-4 border rounded shadow-sm">
                    <h3 className="font-semibold capitalize">{article.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{article.body}</p>
                </li>
            ))}
        </ul>
    </div>
}