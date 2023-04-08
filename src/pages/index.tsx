import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { AddTaskInput } from '@/components/AddTaskInput'
import { useState } from 'react'
import { Tasks } from '@/components/Tasks'
import { useSelector } from 'react-redux'
import { selectTasks } from '@/redux/tasksSlice'
import { Coins } from '@/components/Coins'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const tasks = useSelector(selectTasks);
  
  return (
    <>
      <Head>
        <title>Mini Todo List</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        // TODO: change application icon
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Coins />
      </header>
      <main className={styles.main}>
        <div className={inter.className}>
          // Input
          <AddTaskInput />
          // Tasks List
          <Tasks /> 
        </div>
      </main>
    </>
  )
}
