import React from 'react'
import dayjs from 'dayjs'

export default function Footer() {
    return (
        <div>
            {dayjs().format('HH:mm')}
        </div>
    )
}
