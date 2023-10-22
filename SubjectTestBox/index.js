import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogoChemistry from "../../images/chemistry-color.png";
import LogoBiology from "../../images/biology-color.png";
import LogoPhysics from "../../images/physics-color.png";
import LogoMath from "../../images/math-color.png";
import LogoComputer from "../../images/computer-color.png";
import LogoLogicalReasoning from "../../images/logic.png";
import LogoEnglish from "../../images/english-color.png"

const SubjectTestBox = ({ fetchData }) => {
    const [activeSection, setActiveSection] = useState('');

    const [subSections, setSubSections] = useState([
        { name: 'Physics', logo: LogoPhysics },
        { name: 'Chemistry', logo: LogoChemistry },
        { name: 'Mathematics', logo: LogoMath },
        { name: 'Biology', logo: LogoBiology },
        { name: 'Computer', logo: LogoComputer },
        { name: 'English', logo: LogoEnglish },
        { name: 'Logical Reasoning', logo: LogoLogicalReasoning },
    ]);

    const handleSubSectionClick = (subSection) => () => {
        fetchData(subSection);
    };

    return (
        <div className="container mt-4 entry-test-box-container" style={{ cursor: "pointer" }}>
            <div className="d-flex flex-wrap mt-4">
                {subSections.map((subSection, index) => (
                    <div key={index} className="p-3 sub-section-container" onClick={handleSubSectionClick(subSection.name)}>
                        <div className="text-decoration-none">
                            <div className="sub-section-card">
                                <img src={`${subSection.logo}`} alt={subSection.name} className="sub-section-logo" />
                                <div className="sub-section-name" style={{ cursor: "pointer" }}>{subSection.name}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SubjectTestBox