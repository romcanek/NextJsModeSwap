import React from 'react'
import { NextComponentType } from 'next'
import styles from "../styles/Navbar.module.css"
import { ButtonGroup, Button } from '@mui/material'
import Link from 'next/link'

const Navbar : NextComponentType = () => {
  return (
    <div className={styles.navbar}>
        <h1 className={styles.title}>Next.js dark/light mode</h1>
        <ButtonGroup className={styles.group} variant="text" aria-label="text button group">
            <Link href="/">
                <Button className={styles.odkaz}>Primary</Button>
            </Link>
            <Link href="/idk">
                <Button className={styles.odkaz}>Secondary</Button>
            </Link>
            
        </ButtonGroup>
    </div>
  )
}

export default Navbar