import SystemUsage from './system/SystemUsage';
import MemoryUsage from './system/MemoryUsage';

export default function SystemHealth() {
    return (
        <section className="system-health-section">
            <h3 className="pt-[67px]">System Health</h3>
            <div className="flex w-full gap-[80px] mb-[40px]">
                <SystemUsage />
                <MemoryUsage />
            </div>
        </section>
    );
}
