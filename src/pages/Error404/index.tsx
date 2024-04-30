import { useRouteError } from 'react-router-dom';


const Error404 = () => {
    const error = useRouteError();
    
    return(
        <div className='text-black'>
            <h3>Oops! { error.status }</h3>
            <p>{ error.data }</p>
        </div>
    )
};

export default Error404;