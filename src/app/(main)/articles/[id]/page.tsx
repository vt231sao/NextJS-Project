export async function generateStaticParams() {
    const posts = Array.from({ length: 10 }, (_, i) => ({
        id: (i + 1).toString(),
    }));
    return posts;
}

export default async function ArticlePage({
                                              params
                                          }: {
    params: Promise<{ id: string }>
}) {
     const resolvedParams = await params;
    const id = resolvedParams.id;

     const [commentsRes] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    ]);

    const comments = await commentsRes.json();

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">

            <div className="border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">Коментарі ({comments.length}):</h2>
                <ul className="space-y-4">
                    {comments.map((comment: any) => (
                        <li key={comment.id} className="bg-gray-50 p-4 rounded border border-gray-100">
                            <p className="font-bold text-sm text-gray-800">{comment.email}</p>
                            <p className="text-gray-600 mt-2 text-sm">{comment.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}