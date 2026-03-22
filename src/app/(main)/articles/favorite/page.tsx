import FavoriteArticle from "@/app/components/FavoriteArticle";
import {Suspense} from "react";
export default function FavoritePage() {
    return (<div>
        <h2 className="text-xl font-bold mb-6">Улюблені статті</h2>

        <div className="flex flex-col gap-6">
            <Suspense
                fallback={<div className="p-4 font-bold text-green-800 capitalize border border-gray-200 bg-gray-100 rounded-lg animate-pulse">Завантаження
                    статті 1...</div>}>
                <FavoriteArticle id={1}/>
            </Suspense>

            <Suspense
                fallback={<div className="p-4 font-bold text-green-800 capitalize border border-gray-200 bg-gray-100 rounded-lg animate-pulse">Завантаження
                    статті 2...</div>}>
                <FavoriteArticle id={2}/>
            </Suspense>

            <Suspense
                fallback={<div className="p-4 font-bold text-green-800 capitalize border border-gray-200 bg-gray-100 rounded-lg animate-pulse">Завантаження
                    статті 3...</div>}>
                <FavoriteArticle id={3}/>
            </Suspense>
        </div>
    </div>);
}