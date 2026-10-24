import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function Page({
    title,
    shortUniqueNameForId,
    subtitle,
    children,
}: {
    title: string;
    shortUniqueNameForId?: string;
    subtitle?: string;
    children?: ReactNode;
}) {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    return (
        <>
            {shortUniqueNameForId ? (
                <h1 className="text-4xl font-bold" id={shortUniqueNameForId}>
                    <a
                        href={`#${shortUniqueNameForId}`}
                        className="hover:text-blue-700"
                    >
                        {title}
                    </a>
                </h1>
            ) : (
                <h1 className="text-4xl font-bold">{title}</h1>
            )}

            {subtitle && <span className="text-sm font-light">{subtitle}</span>}
            {children && <div className="pt-6 pb-12">{children}</div>}
        </>
    );
}

export function InlineTextFootnoteModal({
    children,
    title,
    jsx,
}: {
    title?: string;
    jsx: ReactNode;
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
                type="button"
                onClick={() => setIsOpen(true)}
                className="underline hover:text-blue-700"
            >
                <sup>{children}</sup>
            </button>
            {isOpen &&
                createPortal(
                    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity duration-300 ease-out">
                        <div
                            ref={modalRef}
                            className="relative w-full max-w-md scale-100 rounded-2xl bg-white p-6 shadow-2xl transition-all duration-300 ease-out"
                        >
                            {title && (
                                <h2 className="mb-4 text-lg font-semibold">
                                    {title}
                                </h2>
                            )}
                            {jsx}
                        </div>
                    </div>,
                    document.body,
                )}{" "}
        </>
    );
}
