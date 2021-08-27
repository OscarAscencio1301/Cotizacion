import React from 'react'

export const Spinner = () => {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            margin: '2rem 0'
        }}>
            <div class="sk-chase">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
      </div>
        </div>
    
    )
}
