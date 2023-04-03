const useLocaleStorage = () => {
    const getLocaleStorage = (locale: string) => {
    console.log(locale, 'locale')
        return JSON.parse(localStorage.getItem(locale) || "null");
    }
    const setLocaleStorage = (locale: string, value: string) => {
        localStorage.setItem(locale, value);
    }
    const deleteLocaleStorage = (locale: string) => {
        localStorage.removeItem(locale);
    }
    return { getLocaleStorage, setLocaleStorage, deleteLocaleStorage }
}

export default useLocaleStorage;
