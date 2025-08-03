import AverageResponseTime from './performance/AverageResponseTime';
import ErrorRate from './performance/ErrorRate';
import Uptime from './performance/Uptime';

export default function AppPerformance() {
    return (
        <section className="app-performance-section">
            <h3>App Performance</h3>
            <div className="flex w-full gap-4">
                <AverageResponseTime />
                <ErrorRate />
                <Uptime />
            </div>
        </section>
    );
}
