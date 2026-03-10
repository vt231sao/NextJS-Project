import ArticlesMenu from '@/app/components/ArticlesMenu';

export default function ArticlesLayout({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Articles Section</h1>
            <ArticlesMenu />
            {children}
        </div>
    );
}