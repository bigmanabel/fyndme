import NewSignUps from './users/NewSignUps';
import ActiveUsers from './users/ActiveUsers';
import InactiveUsers from './users/InactiveUsers';

export default function UserStats() {
    return (
        <section className="user-stats-section">
            <h3 className="-mt-[28px]">Users</h3>
            <div className="flex w-full gap-4">
                <NewSignUps />
                <ActiveUsers />
                <InactiveUsers />
            </div>
        </section>
    );
}
