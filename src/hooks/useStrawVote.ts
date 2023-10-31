/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2023-10-30 14:20:58
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2023-10-30 18:40:12
 */

import { db } from '@config/firebase'
import {
    doc,
    increment,
    onSnapshot,
    setDoc,
    updateDoc,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

const useStrawVote = () => {
    const [votes, setVotes] = useState<number | null>(null)
    const appDataRef = doc(db, 'app', 'data')

    useEffect(() => {
        const unsub = onSnapshot(doc(db, 'app', 'data'), (doc) => {
            if (doc.data()) setVotes(doc.data()?.vote)
        })

        return () => {
            unsub()
        }
    }, [])

    const addVotes = async () => {
        const isVoted = localStorage.getItem('v')
        if (!JSON.parse(isVoted!)?.isVoted === true) {
            localStorage.setItem('v', JSON.stringify({ isVoted: true }))
            if (!votes) {
                await setDoc(appDataRef, {
                    vote: 1,
                })
            } else {
                await updateDoc(appDataRef, {
                    vote: increment(1),
                })
            }
        }
    }

    return {
        votes,
        addVotes,
    }
}

export default useStrawVote
