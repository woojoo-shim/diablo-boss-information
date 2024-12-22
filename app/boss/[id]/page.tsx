import { diablo_boss_list } from '@/app/data'
import Image from 'next/image'
import Link from 'next/link'
export default function bossdetail({ params }: { params: { id: string }}) {
    const id = params.id 
    const diablo_boss = diablo_boss_list.filter(diablo_boss => diablo_boss.id === id) [0]
    console.log('diablo_boss', diablo_boss)
    return (

        <main>
            <div>
                <Link href="/">뒤로 가기</Link>
            </div>
        <h1 className='text-7xl'>Diablo Act {id} Boss Details</h1>

        <dl className='text-5xl grid grid-cols-[15%_85%] mt-10'>
            <dt>사진</dt>
            <dd>
                <Image
                src = {diablo_boss.img}
                alt = 'image'
                width="1000"
                height = "1000" />
            </dd>
            <dt className='m-5'>이름:</dt>
            <dd>{diablo_boss.name}</dd>

            <dt className='m-5'>저항:</dt>
            <dd>{diablo_boss.resi}</dd>

            <dt className='m-5'>기술:</dt>  
            <dd>{diablo_boss.skill}</dd>
        </dl>
        </main>
    )
}