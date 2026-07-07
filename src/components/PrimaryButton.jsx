import { Button } from "react-bootstrap";

export const PrimaryButton = ({ icon, children, className = "", ...props }) => {
    return (
        <Button
            className={`primary-gradient-button border-0 fw-semibold d-flex align-items-center justify-content-center gap-2 py-2 ${className}`.trim()}
            {...props}
        >
            {icon}
            {children}
        </Button>
    );
};
