import { db } from '@/src/db';
import Link from 'next/link';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet: any) => {
    return <li key={snippet.id}><Link href={'/snippets/' + snippet.id}>{snippet.title}</Link></li>;
  });

  return (
    <>
      <h3><strong>Snippets - List</strong></h3>
      <ul>
        {renderedSnippets}

        <li><Link href="/snippets/999999">Inexistent</Link></li>
      </ul>
    </>
  );
}
