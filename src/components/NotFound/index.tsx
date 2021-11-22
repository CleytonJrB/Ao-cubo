import './notfoundStyle.scss';

export function NotFound() {
    return (
        <div className="container">
            <div className="found">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15ZM14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11ZM11 9.5C11 10.3284 10.3284 11 9.5 11C8.67157 11 8 10.3284 8 9.5C8 8.67157 8.67157 8 9.5 8C10.3284 8 11 8.67157 11 9.5Z" fill="black" />
                </svg>
                <h1>Pagina não encontrada</h1>
            </div>
            <h1>Ou</h1>
            <div className="found">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 11.584V20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20V11.584C8.2341 10.8124 7 9.05032 7 7C7 4.23858 9.23858 2 12 2C12.1316 2 12.262 2.00508 12.391 2.01506L10 6L14 8L16.2147 4.30882C16.7118 5.08574 17 6.00922 17 7C17 9.05032 15.7659 10.8124 14 11.584Z" fill="black" />
                </svg>
                <h1>Em desenvolvimento</h1>
            </div>
        </div>
    );
}