export interface TextInputProps {
    label: string;
    name: string;
    type: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    touched?: boolean;
}
