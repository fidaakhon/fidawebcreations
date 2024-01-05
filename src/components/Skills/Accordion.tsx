import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

export default function BasicAccordion() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        <div className="flex">
                            <div className="icon  mr-2">
                                <CodeIcon style={{ color: "hsl(250, 69%, 61%)", width: 40, height: 40, }} />
                            </div>
                            <div className="text">
                                <h1 className='font-bold'>Frontend Developer</h1>
                                <p className='text-xs'>More than 2 years</p>
                            </div>
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className="progress mb-3">
                            <div className="skills__data">
                                <div className="flex justify-between">
                                    <h3 className="skills__name">HTML</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar rounded" style={{ backgroundColor: "gray", height: 6, width: "", display: "block", }}>
                                    <span className="rounded" style={{ backgroundColor: "hsl(250, 69%, 61%)", height: 6, width: "90%", display: "block" }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="progress mb-3">
                            <div className="skills__data">
                                <div className="flex justify-between">
                                    <h3 className="skills__name">CSS</h3>
                                    <span className="skills__number">85%</span>
                                </div>
                                <div className="skills__bar rounded" style={{ backgroundColor: "gray", height: 6, width: "", display: "block", }}>
                                    <span className="rounded" style={{ backgroundColor: "hsl(250, 69%, 61%)", height: 6, width: "85%", display: "block" }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="progress mb-3">
                            <div className="skills__data">
                                <div className="flex justify-between">
                                    <h3 className="skills__name">Javascript</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar rounded" style={{ backgroundColor: "gray", height: 6, width: "", display: "block", }}>
                                    <span className="rounded" style={{ backgroundColor: "hsl(250, 69%, 61%)", height: 6, width: "70%", display: "block" }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="progress mb-3">
                            <div className="skills__data">
                                <div className="flex justify-between">
                                    <h3 className="skills__name">Reactjs</h3>
                                    <span className="skills__number">75%</span>
                                </div>
                                <div className="skills__bar rounded" style={{ backgroundColor: "gray", height: 6, width: "", display: "block", }}>
                                    <span className="rounded" style={{ backgroundColor: "hsl(250, 69%, 61%)", height: 6, width: "75%", display: "block" }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="progress mb-3">
                            <div className="skills__data">
                                <div className="flex justify-between">
                                    <h3 className="skills__name">Bootstrap</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar rounded" style={{ backgroundColor: "gray", height: 6, width: "", display: "block", }}>
                                    <span className="rounded" style={{ backgroundColor: "hsl(250, 69%, 61%)", height: 6, width: "80%", display: "block" }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="progress mb-3">
                            <div className="skills__data">
                                <div className="flex justify-between">
                                    <h3 className="skills__name">Tailwind</h3>
                                    <span className="skills__number">85%</span>
                                </div>
                                <div className="skills__bar rounded" style={{ backgroundColor: "gray", height: 6, width: "", display: "block", }}>
                                    <span className="rounded" style={{ backgroundColor: "hsl(250, 69%, 61%)", height: 6, width: "85%", display: "block" }}></span>
                                </div>
                            </div>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        <div className="flex">
                            <div className="icon  mr-2">
                                <DynamicFormIcon style={{ color: "hsl(250, 69%, 61%)", width: 40, height: 40, }} />
                            </div>
                            <div className="text">
                                <h1 className='font-bold'>Backend Developer</h1>
                                <p className='text-xs'>More than 1 year</p>
                            </div>
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className="progress mb-3">
                            <div className="skills__data">
                                <div className="flex justify-between">
                                    <h3 className="skills__name">PHP</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar rounded" style={{ backgroundColor: "gray", height: 6, width: "", display: "block", }}>
                                    <span className="rounded" style={{ backgroundColor: "hsl(250, 69%, 61%)", height: 6, width: "70%", display: "block" }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="progress mb-3">
                            <div className="skills__data">
                                <div className="flex justify-between">
                                    <h3 className="skills__name">Node js</h3>
                                    <span className="skills__number">750%</span>
                                </div>
                                <div className="skills__bar rounded" style={{ backgroundColor: "gray", height: 6, width: "", display: "block", }}>
                                    <span className="rounded" style={{ backgroundColor: "hsl(250, 69%, 61%)", height: 6, width: "75%", display: "block" }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="progress mb-3">
                            <div className="skills__data">
                                <div className="flex justify-between">
                                    <h3 className="skills__name">C++</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar rounded" style={{ backgroundColor: "gray", height: 6, width: "", display: "block", }}>
                                    <span className="rounded" style={{ backgroundColor: "hsl(250, 69%, 61%)", height: 6, width: "80%", display: "block" }}></span>
                                </div>
                            </div>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        <div className="flex">
                            <div className="icon  mr-2">
                                <DesignServicesIcon style={{ color: "hsl(250, 69%, 61%)", width: 40, height: 40, }} />
                            </div>
                            <div className="text">
                                <h1 className='font-bold'>Designer</h1>
                                <p className='text-xs'>More than 2 years</p>
                            </div>
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className="progress mb-3">
                            <div className="skills__data">
                                <div className="flex justify-between">
                                    <h3 className="skills__name">Figma</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar rounded" style={{ backgroundColor: "gray", height: 6, width: "", display: "block", }}>
                                    <span className="rounded" style={{ backgroundColor: "hsl(250, 69%, 61%)", height: 6, width: "90%", display: "block" }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="progress mb-2">
                            <div className="skills__data">
                                <div className="flex justify-between">
                                    <h3 className="skills__name">Canva</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar rounded" style={{ backgroundColor: "gray", height: 6, width: "", display: "block", }}>
                                    <span className="rounded" style={{ backgroundColor: "hsl(250, 69%, 61%)", height: 6, width: "80%", display: "block" }}></span>
                                </div>
                            </div>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}