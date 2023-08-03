import {
    ChangeEvent,
    MutableRefObject,
    useEffect,
    useRef,
    useState,
} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { clsx } from "clsx";
import FileList from "./components/FileList";
import Header from "./components/Header";
import Separator from "./components/Separator";
import attachIcon from "./vendor/img/attach.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";

function App() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []); // for animation

    const [files, setFiles] = useState<FileList | null>(null);
    const [isFilesSelected, setIsFilesSelected] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const FILES_LIMIT: number = 100;

    const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

    const handleSelect = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files && e.target.files.length <= FILES_LIMIT) {
            setFiles(e.target.files);
            setIsFilesSelected(true);
        } else {
            handleReset();
            toast.error("Ошибка: Пожалуйста, выберите менее 100 файлов.");
        }
    };

    const handleUpload = (): void => {
        if (!files) {
            toast.error("Произошла ошибка при загрузке. Файлы не выбраны");
            return;
        }

        //* form-data for api example
        // const data = new FormData();
        // for (let i = 0; i < files.length; i++) {
        //     data.append(`file-${i}`, files[i], files[i].name);
        // }

        setIsLoading(true);

        // fake api call

        setTimeout(() => {
            setIsLoading(false);
            console.log("Загруженные файлы - ", Array.from(files));
            handleReset();
            toast("Загрузка прошла успешно!");
        }, 1700);
    };

    const handleReset = (): void => {
        setFiles(null);
        setIsFilesSelected(false);
        inputRef.current.value = "";
    };

    return (
        <div className="app">
            <Header />
            <h1 className="app__title">
                Загрузить файлы в <b>Яндекс.Диск</b>
            </h1>
            <Separator width="545px" margin="26px auto 20px" />
            <p className="app__subtitle">
                *максимальное количество файлов - <b>100</b>
            </p>

            <label
                className={clsx(
                    "app__attach-files",
                    !isFilesSelected && "active"
                )}
            >
                <img src={attachIcon} alt="attach files" />
                <input
                    type="file"
                    onChange={handleSelect}
                    disabled={isFilesSelected}
                    ref={inputRef}
                    multiple
                />
            </label>

            <div className="app__activity">
                <button
                    type="button"
                    className={clsx(
                        "app__activity__button",
                        isLoading && "loading"
                    )}
                    disabled={!isFilesSelected || isLoading}
                    onClick={handleReset}
                >
                    Назад
                </button>
                <button
                    type="button"
                    className={clsx(
                        "app__activity__button bold",
                        isLoading && "loading"
                    )}
                    disabled={!isFilesSelected || isLoading}
                    onClick={handleUpload}
                >
                    Сохранить
                </button>
            </div>
            <Separator width="545px" margin="70px auto 22px" shadow={true} />

            <Loader isLoading={isLoading} opacity="0.7" margin="45px auto 0" />
            {files && !isLoading && <FileList data={Array.from(files)} />}

            <ToastContainer
                position="bottom-center"
                theme="dark"
                closeOnClick
                pauseOnHover
                autoClose={2000}
            />
        </div>
    );
}

export default App;
