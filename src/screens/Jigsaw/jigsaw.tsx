// @ts-ignore
import { Canvas, painters } from 'headbreaker'
import { useEffect, useRef } from 'react'
import gskJigsaw from '@assets/images/gsk-jigsaw.jpg'

const Jigsaw = () => {
    const puzzleRef = useRef(null)

    useEffect(() => {
        const puzzle = puzzleRef.current
        const image = new Image()
        image.src = gskJigsaw
        image.onload = () => {
            const validated = new Canvas(puzzle, {
                width: 500,
                height: 500,
                pieceSize: 80,
                proximity: 18,
                borderFill: 8,
                strokeWidth: 1.5,
                lineSoftness: 0.18,
                image: image,
                fixed: true,
                painter: new painters.Konva(),
            })
            validated.autogenerate({
                horizontalPiecesCount: 5,
                verticalPiecesCount: 5,
            })
            validated.shuffle()
            validated.draw()
            validated.attachSolvedValidator()
            validated.onValid(() => {
                // TODO: implement better success handler
                alert("Congratulations! You've solved the puzzle")
            })
        }
    }, [])
    return (
        <div id="jigsaw">
            <h2 className="heading">
                Solve the puzzle on the left to match Dr. Griffith Selorm
                Klogo's image on the right
            </h2>
            <div className="container">
                <div ref={puzzleRef} id="canvas" className="side"></div>
                <div className="side image"></div>
            </div>
        </div>
    )
}

export default Jigsaw
