export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full grid place-items-center h-screen">
            <div className="border w-fit h-fit rounded-xl flex">
                <div className="p-60 justify-self-center align-self-center">
                    {children}
                </div>
            </div>
        </div>
    );
}