import ServerUsageByCountry from './server/ServerUsageByCountry';
import ServerUsageByState from './server/ServerUsageByState';

export default function ServerUsage() {
    return (
        <section className="server-usage-section">
            <ServerUsageByCountry />
            <ServerUsageByState />
        </section>
    );
}
