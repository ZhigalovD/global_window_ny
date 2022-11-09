import React, {FC} from 'react';

interface Props {
    children?: React.ReactNode,
    backgroundImg: string
}

const SectionTop: FC<Props> = ({ children,  backgroundImg}) => {
    return (
        <div>
            <div className={"section_top"} style={{ backgroundImage: `url(${backgroundImg})` }}>
                <div className="container">
                    <div className={"section_top__content"}>
                        { children }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTop;