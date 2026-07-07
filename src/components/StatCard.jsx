export const StatCard = ({ label, value }) => {
    return (
        <div className="border rounded p-3">
            <p className="mb-2 small text-secondary">{label}</p>
            <p className="mb-0 fw-bold fs-4">{value}</p>
        </div>
    );
};
