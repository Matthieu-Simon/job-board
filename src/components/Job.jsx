import PropTypes from "prop-types";

const Job = ({ title, contractType, country, city, className }) => {
    return (
        <div className={className}>
            <h2>{title}</h2>
            <p>
                {contractType} - {country} - {city}
            </p>
        </div>
    )
}

Job.propTypes = {
    title: PropTypes.string.isRequired,
    contractType: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
}

export default Job;