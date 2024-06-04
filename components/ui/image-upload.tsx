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

    return (
        <div>ImageUpload</div>
    )
}