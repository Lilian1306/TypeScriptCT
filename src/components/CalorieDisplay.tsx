
type CaloriesDisplyProps = {
    calories: number
    text: string
}

export default function CaloriesDisplay({calories, text}: CaloriesDisplyProps) {
    return (
        <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
            <span>{calories}</span>
            {text}
        </p>
    )
}