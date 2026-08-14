export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-secondary/10 border-t py-8">
            <div className="text-secondary mx-auto max-w-5xl px-6 text-center text-sm">
                <p>© {currentYear} Magnhild Myskja.</p>
            </div>
        </footer>
    )
}
