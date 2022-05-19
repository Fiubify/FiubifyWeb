function LoggedInChecker({component, token}) {
    if (token !== '') {
        return <div>{component}</div>
    } else {
        return <div>
            <h2>Page does not exist</h2>
        </div>
    }
}

export default LoggedInChecker;