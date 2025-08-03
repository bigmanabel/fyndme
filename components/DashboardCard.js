export default function DashboardCard({ title, children, className = "" }) {
    return (
        <div className={`card ${className}`}>
            {title && <h4 className="text-lg font-semibold mb-2">{title}</h4>}
            {children}
        </div>
    );
}
