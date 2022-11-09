import React, {FC} from 'react';

interface Props {
    children?: React.ReactNode;
    onClick?: (e: any) => void;
    className?: string
}

const Button: FC<Props> = ({ children, className, onClick }) => {
    return (
        <div className={className ? `${className} button` : "button"} onClick={onClick} >
            {children}
        </div>
    );
};

export default Button;