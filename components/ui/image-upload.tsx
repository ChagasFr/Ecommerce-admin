"use client";

import { useEffect, useState } from "react";
import { Trash } from "lucide-react";
import { Image } from "next/image";
import { CldUploadWidget } from "next-cloudinary";

import { Button } from "@/components/ui/button";

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
                        <div className="z-10 absolute top-2 right-2">
                            <Button type="button" onClick={() => onRemove(url)} variant="destructive" size="icon">
                                <Trash className="h-4 2-4" />
                            </Button>
                        </div>
                        <Image fill className="object-cover" alt="Image" scr={url} />
                    </div>
                ))}
            </div>
            <CldUploadWidget onUpload={onUpload} uploadWidget="">

            </CldUploadWidget>
        </div>
    )
}

export default ImagemUpLoad