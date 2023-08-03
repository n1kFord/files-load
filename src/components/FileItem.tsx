import React, { FC } from "react";

export interface FileItemProps {
    namePath: string;
    icon?: string;
}

const FileItem: FC<FileItemProps> = ({ namePath, icon }) => {
    return (
        <div className="file-item">
            <img src={icon} alt="" className="file-item__avatar" />
            <p className="file-item__name">{namePath}</p>
        </div>
    );
};

export default FileItem;
