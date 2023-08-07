const Chip = ({ text, size, color }) => {
    const styles = {
        colors: {
            orange: 'bg-orange-900 text-orange-300',
            green: 'bg-green-900 text-green-300',
            cyan: 'bg-cyan-900 text-cyan-300',
            purple: 'bg-purple-900 text-purple-300',
            pink: 'bg-pink-900 text-pink-300',
        },
        sizes: {
            small: 'h-5 px-2 text-xs',
            normal: 'h-6 px-3 text-xs',
        },
    }

    return <div className={`flex items-center justify-center rounded-2xl ${styles.sizes[size]} ${styles.colors[color]}`}>{text}</div>
}

export default Chip
