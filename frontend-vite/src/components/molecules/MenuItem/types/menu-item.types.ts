export type MenuItemProps = {
    icon: React.ReactNode | string;
    label: string;
    active?: boolean;
    onClick?: () => void;
}