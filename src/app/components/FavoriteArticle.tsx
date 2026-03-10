
export default async function FavoriteArticle({id}: {id: number }) {
    await new Promise((resolve) => setTimeout(resolve, id * 1000));
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return (
        <div className="p-4 border-2 border-green-200 rounded-lg bg-green-50">
            <h3 className="font-bold text-green-800 capitalize">ID: {data.id} - {data.title}</h3>
            <p className="text-gray-700 mt-2">{data.body}</p>
        </div>
    );
}