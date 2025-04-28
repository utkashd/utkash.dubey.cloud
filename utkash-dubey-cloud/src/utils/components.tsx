import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export function Page({
    title,
    subtitle,
    children,
}: {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}) {
    return (
        <>
            <h1 className="text-6xl max-w-300">{title}</h1>
            {subtitle && <span className="font-light text-sm">{subtitle}</span>}
            <div className="pt-12 pb-18 max-w-280">{children}</div>
        </>
    );
}

export function StyledLink({
    to,
    children,
    onClick,
}: {
    to: string;
    children: React.ReactNode;
    onClick?: () => void;
}) {
    return (
        <div className="text-2xl">
            <Link to={to} style={{ color: "white" }} onClick={onClick}>
                {children}
            </Link>
        </div>
    );
}

export function InlineTextFootnoteModal({
    children,
    title,
    jsx,
}: {
    title?: string;
    jsx: React.ReactNode;
    children: string;
}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="text-amber-300 hover:text-amber-600 underline"
            >
                <sup>{children}</sup>
            </button>
            {isOpen && (
                <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ease-out">
                    <div
                        ref={modalRef}
                        className="bg-amber-950 p-6 rounded-2xl shadow-2xl max-w-md w-full relative transform transition-all duration-300 ease-out scale-100"
                    >
                        {title && (
                            <h2 className="text-lg font-semibold mb-4">
                                {title}
                            </h2>
                        )}
                        <p>{jsx}</p>
                    </div>
                </div>
            )}{" "}
        </>
    );
}
