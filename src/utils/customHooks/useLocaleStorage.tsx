const useLocaleStorage = () => {
    const getLocaleStorage = (locale: string) => {
        return localStorage.getItem(locale);
    }
    const setLocaleStorage = (locale: string, value: string) => {
        localStorage.setItem(locale, value);
    }
    const deleteLocaleStorage = (locale: string) => {
        localStorage.removeItem(locale);
    }
    return {getLocaleStorage, setLocaleStorage, deleteLocaleStorage}
}

export default useLocaleStorage;