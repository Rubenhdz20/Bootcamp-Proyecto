import { useRouteError, isRouteErrorResponse } from 'react-router-dom';


const Error404 = () => {
    const error = useRouteError();
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        errorMessage = error.data.message || error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = 'Unknown error';
    }
    
    return(
        <div className='text-black'>
            <h3>Oops! An unexpected error ocurred.</h3>
            <p>{ errorMessage }</p>
        </div>
    )
};

export default Error404;