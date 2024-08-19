import PropTypes from "prop-types";

const Footer = ({ className }) => {
    return (
        <footer className={className}>
            Made with <a href="https://react.dev/" target="_blank">React</a> at <a href="https://www.lereacteur.io/" target="_blank">Le Reacteur</a> By <a href="https://github.com/Matthieu-Simon" target="_blank">Matthieu</a>
        </footer>)
}

Footer.propTypes = {
    className: PropTypes.string.isRequired,
}

export default Footer;