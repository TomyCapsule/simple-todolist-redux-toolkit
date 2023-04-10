import Image from 'next/image'
import { Inter } from 'next/font/google'
import Todos from '@/components/Todos.component'
import AddTodo from '@/components/AddTodo.component'
import SaveTodo from '@/components/SaveTodo.component'
import ClearTodo from '@/components/ClearTodo.component'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Todos/>
      <div className='flex items-center justify-between'>
        <AddTodo/>
        <SaveTodo/>
        <ClearTodo/>
      </div>
    </main>
  )
}
