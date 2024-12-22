'use client';

import { FC, useState } from 'react';
import { articles } from './data/articles';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import DeleteArticle from './components/deleteArticleButton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const ArticlePage: FC = () => {
  const router = useRouter();

  const [search, setSearch] = useState('');

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSeeDetailArticle = (articleId: string) => {
    console.log(`Seeing detail article with id ${articleId}`);
    router.push(`article/${articleId}`)
}

  return (
    <div className="px-6 py-4 max-w-[90rem] mx-auto flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Articles</h1>
      <div className="flex justify-between items-center">
        <Button
          onClick={() => router.push(`article/create`)}
          className="px-4 py-2"
        >
          Add Article
        </Button>
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded"
        />
      </div>
      <Table className="min-w-full bg-white">
        <TableHeader>
          <TableRow>
            <TableHead className="py-2 text-center font-bold">ID</TableHead>
            <TableHead className="py-2 text-center font-bold">Title</TableHead>
            <TableHead className="py-2 text-center font-bold">Author</TableHead>
            <TableHead className="py-2 text-center font-bold">Date</TableHead>
            <TableHead className="py-2 text-center font-bold">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredArticles.map((article) => (
            <TableRow key={article.id}>
              <TableCell className="py-2 text-center">{article.id}</TableCell>
              <TableCell className="py-2 text-center">
                {article.title}
              </TableCell>
              <TableCell className="py-2 text-center">
                {article.author}
              </TableCell>
              <TableCell className="py-2 text-center">{article.date}</TableCell>
              <TableCell className="py-2 text-center">
                <button
                  className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => handleSeeDetailArticle(article.id)}
                >
                  Edit
                </button>
                <DeleteArticle
                  articleId={article.id}
                  onDelete={(id) => console.log(`Deleting article with id ${id}`)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ArticlePage;