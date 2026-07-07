import { Button } from "react-bootstrap";

export const ActionButton = ({ icon, children, className = "", ...props }) => {
    return (
        <Button
            className={`fw-semibold d-flex align-items-center justify-content-center gap-2 py-2 ${className}`.trim()}
            {...props}
        >
            {icon}
            {children}
        </Button>
    );
};
