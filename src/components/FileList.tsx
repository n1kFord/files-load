import React, { FC } from "react";
import uuid from "react-uuid";
import FileItem from "./FileItem";

interface FileListProps {
    data: File[];
}

const FileList: FC<FileListProps> = ({ data }) => {
    return (
        <div className="file-list" data-aos="fade-up">
            <span className="file-list__counter">
                Всего файлов: <b>{data?.length}</b>
            </span>
            <div className="file-list__container">
                {data?.map((item) => {
                    return (
                        <FileItem
                            namePath={item.name}
                            icon={item.name} // for incorrect display
                            key={uuid()}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default FileList;
