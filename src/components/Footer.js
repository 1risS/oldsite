import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        {/* <li><a href="https://twitter.com/IrisSIrisR" className="icon fa-twitter"><span className="label">Twitter</span></a></li> */}
                        <li><a href="https://github.com/1risS" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://gitlab.com/1risS" className="icon fa-gitlab"><span className="label">Gitlab</span></a></li>
                        {/* <li><a href="iris.r.saladino@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li> */}
                    </ul>
                    <ul className="copyright">
                        {/* <li>&copy; Gatsby Starter Strata</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li> */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
