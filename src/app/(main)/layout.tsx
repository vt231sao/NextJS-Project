import MainMenu from '@/app/components/MainMenu';

export default function MainLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <MainMenu />
            <div className="p-4">
                {children}
            </div>
        </section>
    );
}