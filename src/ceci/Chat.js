import React, {useEffect, useState} from "react";

export default function Chat() {
    class TextScramble {
        constructor() {
            this.chars = '!<>-_\\/[]{}—=+*^?#________'
        }

        setText(newText, old) {
            const oldText = old // todo provavel problema que crasha o scramble
            const length = Math.max(oldText.length, newText.length)
            const promise = new Promise((resolve) => this.resolve = resolve)
            this.queue = []
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || ''
                const to = newText[i] || ''
                const start = Math.floor(Math.random() * 40)
                const end = start + Math.floor(Math.random() * 40)
                this.queue.push({from, to, start, end})
            }
            cancelAnimationFrame(this.frameRequest)
            this.frame = 0

            this.update()
            return promise
        }

        update() {
            let output = ''
            let complete = 0
            for (let i = 0, n = this.queue.length === undefined ? 0 : this.queue.length; i < n; i++) {
                let {from, to, start, end, char} = this.queue[i]
                if (this.frame >= end) {
                    complete++
                    output += to
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar()
                        this.queue[i].char = char
                    }
                    output += `<span class="dud">${char}</span>`
                } else {
                    output += from
                }
            }
            setText(output)
            if (complete === this.queue.length) {
                this.resolve()
            } else {
                this.frameRequest = requestAnimationFrame(this.update)
                this.frame++
            }
        }

        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)]
        }
    }

    const [text, setText] = useState('oi');
    const scramble = new TextScramble();

    const phrases = [
        'Neo,',
        'sooner or later',
        'you\'re going to realize',
        'just as I did',
        'that there\'s a difference',
        'between knowing the path',
        'and walking the path'
    ]


    let counter = 0

    const next = () => {
        scramble.setText(phrases[counter], counter === 0 ? phrases[counter] : phrases[counter - 1]).then(() => {
            setTimeout(next, 800)
        })
        counter = (counter + 1) % phrases.length
    }


    useEffect(() => {
        next()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="flex items-center justify-center text-4xl text-left">
            {text}
        </div>
    );
}

