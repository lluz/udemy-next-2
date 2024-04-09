import Link from 'next/link';

export default function Header() {
  return (
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/performance">Performance</Link></li>

      <li><Link href="/snippets/list">Snippets - List</Link></li>

    </ul>
  );
}
