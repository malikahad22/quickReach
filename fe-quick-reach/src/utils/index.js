import { toast } from 'react-toastify';

export const responseHandler = (resp) => {
   return { statusCode: resp?.status || '', data: resp?.data || {}, message: resp?.statusText || '' };
}

export const errorHandler = (err) => {
   // Default error message
   let errorMessage = 'Something went wrong!';

   // Handle different types of errors
   if (err.response) {
      // Server responded with a status code other than 2xx (4xx or 5xx)
      const statusCode = err.response.status;

      switch (statusCode) {
         case 400:
            errorMessage = 'Bad Request. Please check the input data.';
            toastHandler(errorMessage, 'error');
            break;
         case 401:
            errorMessage = 'Unauthorized. Please log in again.';
            toastHandler(errorMessage, 'error');
            break;
         case 403:
            errorMessage = 'Forbidden. You don’t have permission to access this resource.';
            toastHandler(errorMessage, 'error');
            break;
         case 404:
            errorMessage = 'Not Found. The requested resource could not be found.';
            toastHandler(errorMessage, 'error');
            break;
         case 500:
            errorMessage = 'Internal Server Error. Please try again later.';
            toastHandler(errorMessage, 'error');
            break;
         case 502:
            errorMessage = 'Bad Gateway. There was a problem with the server.';
            toastHandler(errorMessage, 'error');
            break;
         case 503:
            errorMessage = 'Service Unavailable. Please try again later.';
            toastHandler(errorMessage, 'error');
            break;
         default:
            errorMessage = `An error occurred: ${err.response.statusText}`;
            toastHandler(errorMessage, 'error');

      }
   } else if (err.request) {
      // Network errors or no response from server
      errorMessage = 'Network error. Please check your internet connection or try again later.';
      toastHandler(errorMessage, 'error');
      return;
   } else if (err.message) {
      errorMessage = err.message;
      toastHandler(errorMessage, 'error');
      return;
   }
   console.error('ErrorHandler:', err);
};

export const toastHandler = (message, type) => {
   switch (type) {
      case 'error':
         toast.error(message);
         break;
      case 'success':
         toast.success(message);
         break
      case 'warning':
         toast.warning(message)
   }
}