import PropTypes from "prop-types";
import Job from "./Job";

const Jobs = ({ className }) => {
    return (
        <main className={className}>
            <Job 
                title={"Full Time Sales Associate - Sydney Boutique"}
                contractType={"CDI"}
                country={"Australie"} 
                city={"Sydney"}
                className="job item1"
            />
            <Job 
                title={"Agent de Sécurité - Pantin"}
                contractType={"CDI"}
                country={"France"} 
                city={"Pantin"}
                className="job item2"
            />
            <Job 
                title={"Responsable d'Atelier (H/F)"}
                contractType={"CDD"}
                country={"France"} 
                city={"Paris"}
                className="job item3"
            />
            <Job 
                title={"Chef de Projets"}
                contractType={"CDD"}
                country={"France"} 
                city={"Paris"}
                className="job item4"
            />
            <Job 
                title={"Développeur React.js"}
                contractType={"CDI"}
                country={"France"} 
                city={"Paris"}
                className="job item5"
            />
            <Job 
                title={"Sales Associate Stockholm"}
                contractType={"CDI"}
                country={"Suède"} 
                city={"Stockholm"}
                className="job item6"
            />
            <Job 
                title={"Vendeur/se -Crans Montana"}
                contractType={"CDI"}
                country={"Suisse"} 
                city={"Crans-Montana"}
                className="job item7"
            />
            <Job 
                title={"CRM & Data Quality Analyst"}
                contractType={"CDI"}
                country={"USA"} 
                city={"New York"}
                className="job item8"
            />
            <Job 
                title={"Infirmier (H/F)"}
                contractType={"CDI"}
                country={"France"} 
                city={"Pantin"}
                className="job item9"
            />
        </main>
    )
}

Jobs.propTypes = {
    className: PropTypes.string.isRequired
}

export default Jobs;