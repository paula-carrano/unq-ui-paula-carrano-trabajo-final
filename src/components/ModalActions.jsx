import { Stack } from "react-bootstrap";

export const ModalActions = ({ children }) => {
    return (
        <Stack gap={3} className="w-100">
            {children}
        </Stack>
    );
};
