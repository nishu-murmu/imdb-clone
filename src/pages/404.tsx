import MainLayout from "../components/layouts/MainLayout"

const ErrorBoundary:React.FC = () => {
    return(
        <MainLayout>
            <div className="h-list container mx-auto">
                <h1 className="flex justify-center  pt-40 text-5xl font-extrabold text-red-600">No Page Found!</h1>
            </div>
        </MainLayout>
    )
}
export default ErrorBoundary