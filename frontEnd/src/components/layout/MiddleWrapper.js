const MiddleWrapper = (props) => {

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>{props.heading}</h1>
                        </div>
                    </div>
                </div>
            </section>
            {props.children}
        </div>
    );
}

export default MiddleWrapper;