'use client'
import Link from 'next/link';
import { diablo_boss_list } from './data';
import { useState } from 'react'
export default function Home()
{
  const [text, setText] = useState('');
  // eslint-disable-next-line
  const onfilterChange = (e: any) => {
    const t = e.target.value;
    setText(t)
  }


  const list = diablo_boss_list.filter(boss => boss.name.includes(text) )
  console.log('list', list)
  return (
    <>
    <h1 className="text-5xl mb-10">디아블로 보스 정리</h1>

    <div className="mb-5">
      검색기 <input className="border border-gray-500" value={text} onChange={onfilterChange}/>
    </div>

    <div className="text-5xl text-rose-800">
      <ul>
        {
          list.map(boss => (
            <div className="mb-10" key = {boss.id}>
              
               <li className="text-amber-500">

                {boss.id}.  <Link href={'/boss/' + boss.id}>{boss.name}</Link>
               </li>
           
            </div>
          ))
        }
      </ul>
    </div>
    </>
  );
}
