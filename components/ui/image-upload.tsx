"use client";

import { useEffect, useState } from "react";

interface ImagemUpLoadProps {
    disabled?: boolean;
    onChange: (value: string) => void;
    onRemove: (value: string) => void;
    value: string[];
}

const ImagemUpLoad: React.FC<ImagemUpLoadProps> = ({
    disabled,
    onChange,
    onRemove,
    value
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const onUpload = (result: any) => {
        onChange(result.info.secure_url)
    }

    if (!isMounted) {
        return null
    }

    return (
        <div>
            <div className="mb-4 flex items-center gap-4">
                {value.map((url) => (
                    <div key={url} className="relative w-[200-x] h-[200-x] rounded-md overflow-hidden">

                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImagemUpLoad