import ff from '@/public/test/44.png';
import eminem from '@/public/test/eminem.png'
import kanye from '@/public/test/kanye.png'
import lil from '@/public/test/lil.png'
import mgk from '@/public/test/mgk.png'
import taylor from '@/public/test/taylor.png'

import part1 from '@/public/test/part1.png';
import part2 from '@/public/test/part2.png';
import part3 from '@/public/test/part3.png';
import part4 from '@/public/test/part4.png';
import { AtomicCard } from './Interfaces/components/Home';


export const artistTestList:AtomicCard[] = [
    {
      img: eminem,
      name: 'Eminem'
    },
    {
      img: taylor,
      name: 'Taylor Swift'
    },
    {
      img: ff,
      name: '44 Phantom'
    },
    {
      img: mgk,
      name: 'Machine Gun Kelly'
    },
    {
      img: kanye,
      name: 'Kanye West'
    },
    {
      img: lil,
      name: 'Lil Peep'
    }
]

export const eventsTestList:AtomicCard[] = [
  {
    img: part1,
    name: 'Eminem'
  },
  {
    img: part2,
    name: 'Taylor Swift'
  },
  {
    img: part3,
    name: '44 Phantom'
  },
  {
    img: part4,
    name: 'Machine Gun Kelly'
  }
]

export const MusicTestList:AtomicCard[] = [];