import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/JosephTico/" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/Josephvb10/" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://linkedin.com/in/josephvargas" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="mailto:josephvb11@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Joseph Vargas</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
