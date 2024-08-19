import PropTypes from "prop-types";
import Title from "./Title";

const Header = ({ title, className }) => {
    return (
        <header className={className}>
            <Title title={title} className="title" />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
}

export default Header;