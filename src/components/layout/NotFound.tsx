import { Link } from '@tanstack/react-router'
import { ROUTES } from '@/constants/navigation'

export function NotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-start justify-center gap-6 px-6 md:px-12 lg:px-16">
            <h1 className="font-serif-title text-primary text-4xl font-normal tracking-tight md:text-6xl">
                Siden finnes ikke
            </h1>
            <p className="text-secondary max-w-md text-lg">
                Siden du leter etter finnes ikke, eller har blitt flyttet.
            </p>
            <Link
                to={ROUTES.HOME}
                className="bg-primary inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white transition-colors duration-300 md:text-lg"
            >
                Til forsiden
            </Link>
        </div>
    )
}
