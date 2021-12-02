import React, {useEffect, useState} from "react";
import parse from 'html-react-parser';
import {useNavigate} from "react-router-dom";

export default function Chat() {
    class TextScramble {
        constructor() {
            this.chars = '!-_\\/[]{}—=+*^?#________'
            this.update = this.update.bind(this)
        }

        setText(newText) {
            const oldText = text // todo provavel problema que crasha o scramble
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
            for (let i = 0, n = this.queue.length; i < n; i++) {
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
            console.log(output)
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

    const [text, setText] = useState('');
    const scramble = new TextScramble();
    const navigate = useNavigate();
    const phrases = [
        'Oi, tudo bem?',
        'Meu nome é Cecília',
        'Vou te guiar aqui no CIEE',
        'Para começar, me fala qual é seu objetivo aqui'
    ]
    const next = () => {
        scramble.setText(phrases[counter]).then(() => {
            setTimeout(next, 5000)
        })
        counter = (counter + 1) % phrases.length
    }

    let counter = 0


    useEffect(() => {
        next()
        // eslint-disable-next-line
    }, [])

    function pageChange(route) {
        navigate(route);
    }

    return (
        <div className="flex items-center justify-center text-4xl text-left">
            {parse(text)}
        </div>
    );
}

