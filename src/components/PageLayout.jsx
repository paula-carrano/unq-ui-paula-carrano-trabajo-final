export const PageLayout = ({
    children,
    layoutClassName = "",
    pageClassName = "",
}) => {
    return (
        <main className={`app-layout ${layoutClassName}`}>
            <div className={`app-page ${pageClassName}`}>{children}</div>
        </main>
    );
};
