import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogoMdcat from "../../images/logo-mdcat.jpeg";
import LogoAku from "../../images/logo-aku.png";
import LogoEtea from "../../images/logo-etea.png";
import LogoFast from "../../images/logo-fast.png";
import LogoGiki from "../../images/logo-giki.png";
import LogoEcatSindh from "../../images/logo-ecat-sindh.png";
import LogoMcatSindh from "../../images/logo-mcat-sindh.png";
import LogoNts from "../../images/logo-nts.png";
import LogoNust from "../../images/logo-nust.png";
import LogoPieas from "../../images/logo-pieas.png";
import LogoEcat from "../../images/logo-ecat-punjab.png";
import LogoUhs from "../../images/logo-uhs.jpeg";


const EntrytestBox = ({ fetchData }) => {
    const [activeSection, setActiveSection] = useState('MDCAT');

    const [subSections, setSubSections] = useState([
        { name: 'National MDCAT', logo: LogoMdcat },
        { name: 'UHS MDCAT', logo: LogoUhs },
        { name: 'ETEA MEDICAL (KPK)', logo: LogoEtea },
        { name: 'MCAT SINDH', logo: LogoMcatSindh },
        { name: 'AKU ENTRY TEST', logo: LogoAku },
        { name: 'NUMS ENTRY TEST', logo: LogoNts }
    ]);

    const handleSubSectionClick = (subSection) => () => {
        fetchData(subSection);
    };

    const handleSectionClick = (section) => {
        setActiveSection(section);
        switch (section) {
            case 'MDCAT':
                setSubSections([
                    { name: 'National MDCAT', logo: LogoMdcat },
                    { name: 'UHS MDCAT', logo: LogoUhs },
                    { name: 'ETEA MEDICAL (KPK)', logo: LogoEtea },
                    { name: 'MCAT SINDH', logo: LogoMcatSindh },
                    { name: 'AKU ENTRY TEST', logo: LogoAku },
                    { name: 'NUMS ENTRY TEST', logo: LogoNts }
                ]);
                break;
            case 'ECAT':
                setSubSections([
                    // 'ECAT Punjab', 'PIEAS ENTRY TEST', 'FAST ENTRY TEST(CS/ENGG)', 'FAST (BBA/BS-AF)', 'GIKI ENTRY TEST', 'ECAT SINDH', 'ETEA ENGINEERING(KPK)'
                    { name: 'ECAT Punjab', logo: LogoEcat },
                    { name: 'PIEAS ENTRY TEST', logo: LogoPieas },
                    { name: 'FAST ENTRY TEST (CS/ENGG)', logo: LogoFast },
                    { name: 'FAST (BBA/ BS-AF)', logo: LogoFast },
                    { name: 'GIKI ENTRY TEST', logo: LogoGiki },
                    { name: 'ECAT SINDH', logo: LogoEcatSindh },
                    { name: 'ETEA ENGINEERING (KPK)', logo: LogoEtea }
                ]);
                break;
            case 'NET':
                setSubSections([
                    // 'NUST ENTRY TEST'
                    { name: 'NUST ENTRY TEST (Engineering)', logo: LogoNust },
                    { name: 'NUST ENTRY TEST (BS Computer Science)', logo: LogoNust },
                    { name: 'NUST ENTRY TEST (BS Biotechnology)', logo: LogoNust },
                    { name: 'NUST ENTRY TEST (BSCS for Pre Medical Students)', logo: LogoNust },
                    { name: 'NUST ENTRY TEST (BS Mathematics)', logo: LogoNust },
                    { name: 'NUST ENTRY TEST (BS Physics)', logo: LogoNust },
                    { name: 'NUST ENTRY TEST (BS Chemistry)', logo: LogoNust },
                    { name: 'NUST ENTRY TEST (Business & Social Studies)', logo: LogoNust },
                    { name: 'NUST ENTRY TEST (B Arch & BID)', logo: LogoNust }

                ]);
                break;
            case 'NAT':
                setSubSections([
                    // 'NAT ENTRY TEST'
                    { name: 'NAT ENTRY TEST', logo: LogoNts }
                ]);
                break;
            case 'GAT':
                setSubSections([
                    // 'GAT ENTRY TEST'
                    { name: 'GAT ENTRY TEST', logo: LogoNts }
                ]);
                break;
            default:
                setSubSections([]);
        }
    };

    return (
        <div className="container mt-4 entry-test-box-container" style={{ cursor: "pointer" }}>
            <div className="d-flex justify-content-between flex-wrap">
                <button
                    className={`btn btn-${activeSection === 'MDCAT' ? 'primary' : 'secondary'}`}
                    onClick={() => handleSectionClick('MDCAT')}
                >
                    MDCAT
                </button>
                <button
                    className={`btn btn-${activeSection === 'ECAT' ? 'primary' : 'secondary'}`}
                    onClick={() => handleSectionClick('ECAT')}
                >
                    ECAT
                </button>
                <button
                    className={`btn btn-${activeSection === 'NET' ? 'primary' : 'secondary'}`}
                    onClick={() => handleSectionClick('NET')}
                >
                    NET
                </button>
                <button
                    className={`btn btn-${activeSection === 'NAT' ? 'primary' : 'secondary'}`}
                    onClick={() => handleSectionClick('NAT')}
                >
                    NAT
                </button>
                <button
                    className={`btn btn-${activeSection === 'GAT' ? 'primary' : 'secondary'} resp-btn`}
                    onClick={() => handleSectionClick('GAT')}
                >
                    GAT
                </button>
            </div>
            <div className="d-flex flex-wrap mt-4">
                {subSections.map((subSection, index) => (
                    <div key={index} className="p-3 sub-section-container" onClick={handleSubSectionClick(subSection.name)}>
                        <div className="text-decoration-none">
                            <div className="sub-section-card">
                                {/* <img src={require(`./assets/${subSection.logo}`).default} alt={subSection.name} className="sub-section-logo" /> */}
                                <img src={`${subSection.logo}`} alt={subSection.name} className="sub-section-logo" />
                                <div className="sub-section-name">{subSection.name}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EntrytestBox;