'use client';

import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function ArticleCard({ article }: { article: any }) {
    return (
        <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <CardContent className="flex-grow">
                <Typography gutterBottom variant="h6" component="div" className="capitalize font-bold text-brand-dark">
                    {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="line-clamp-3">
                    {article.body}
                </Typography>
            </CardContent>
            <CardActions className="p-4 bg-gray-50 border-t border-gray-100">
                <Button
                    size="small"
                    className="text-brand-main font-bold"
                    component={Link}
                    href={`/articles/${article.id}`}
                >
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
}