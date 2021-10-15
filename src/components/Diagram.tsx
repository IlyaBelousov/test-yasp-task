import React from 'react';
import s from './Diagram.module.css'

import {DiagramDataType} from "../App";

type DiagramPropsType = {
    diagramData?: DiagramDataType
}

export const Diagram = (props: DiagramPropsType) => {
    return <div className={s.container}>
        <div className={s.title}>
            <span>Количество пройденных тестов “{props.diagramData?.title}”</span>
            <span><svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
    d="M2 3C1.60218 3 1.22064 2.84196 0.93934 2.56066C0.658035 2.27936 0.5 1.89782 0.5 1.5C0.5 1.10218 0.658035 0.720644 0.93934 0.43934C1.22064 0.158035 1.60218 0 2 0C2.39782 0 2.77936 0.158035 3.06066 0.43934C3.34196 0.720644 3.5 1.10218 3.5 1.5C3.5 1.89782 3.34196 2.27936 3.06066 2.56066C2.77936 2.84196 2.39782 3 2 3ZM7 3C6.60218 3 6.22064 2.84196 5.93934 2.56066C5.65804 2.27936 5.5 1.89782 5.5 1.5C5.5 1.10218 5.65804 0.720644 5.93934 0.43934C6.22064 0.158035 6.60218 0 7 0C7.39782 0 7.77936 0.158035 8.06066 0.43934C8.34196 0.720644 8.5 1.10218 8.5 1.5C8.5 1.89782 8.34196 2.27936 8.06066 2.56066C7.77936 2.84196 7.39782 3 7 3ZM12 3C11.6022 3 11.2206 2.84196 10.9393 2.56066C10.658 2.27936 10.5 1.89782 10.5 1.5C10.5 1.10218 10.658 0.720644 10.9393 0.43934C11.2206 0.158035 11.6022 0 12 0C12.3978 0 12.7794 0.158035 13.0607 0.43934C13.342 0.720644 13.5 1.10218 13.5 1.5C13.5 1.89782 13.342 2.27936 13.0607 2.56066C12.7794 2.84196 12.3978 3 12 3Z"
    fill="#898290"/>
</svg></span>

        </div>
        <div className={s.dataContainer}>
            <div className={s.columnContainer}>
                <div className={s.column}>
                    <div
                        style={{backgroundColor: ' #4AB6E8',height:`${props.diagramData?.dev.front&&props.diagramData?.dev.front*1.5}px`}} className={s.testsResultsClient}><span>{props.diagramData?.dev.front}</span></div>
                    <div
                        style={{backgroundColor: ' #AA6FAC',height:`${props.diagramData?.dev.back&&props.diagramData?.dev.back*1.5}px`}}
                        className={s.testsResults}>
                        <span>{props.diagramData?.dev.back}</span>
                    </div>
                    <div
                        style={{backgroundColor: ' #E85498',height:`${props.diagramData?.dev.db&&props.diagramData?.dev.db*1.5}px`}} className={s.testsResultsDb}><span>{props.diagramData?.dev.db}</span></div>
                </div>
                <span>dev</span>
            </div>
            <div className={s.columnContainer}>
                <div className={s.column}>
                    <div
                        style={{backgroundColor: ' #4AB6E8',height:`${props.diagramData?.dev.back&&props.diagramData?.test.front*1.5}px`}}
                        className={s.testsResultsClient}><span>{props.diagramData?.test.front}</span></div>
                    <div
                        style={{backgroundColor: ' #AA6FAC',height:`${props.diagramData?.test.back&&props.diagramData?.test.back*1.5}px`}}
                        className={s.testsResults}><span>{props.diagramData?.test.back}</span></div>
                    <div
                        style={{backgroundColor: ' #E85498',height:`${props.diagramData?.test.db&&props.diagramData?.test.db*1.5}px`}}
                        className={s.testsResultsDb}><span>{props.diagramData?.test.db}</span></div>
                </div>
                <span>test</span>
            </div>
            <div className={s.columnContainer}>
                <div className={s.column}>
                    <div
                        style={{backgroundColor: ' #4AB6E8',height:`${props.diagramData?.prod.front&&props.diagramData?.prod.front*1.5}px`}}
                        className={s.testsResultsClient}><span>{props.diagramData?.prod.front}</span></div>
                    <div
                        style={{backgroundColor: ' #AA6FAC',height:`${props.diagramData?.prod.back&&props.diagramData?.prod.back*1.5}px`}}
                        className={s.testsResults}><span>{props.diagramData?.prod.back}</span></div>
                    <div
                        style={{backgroundColor: ' #E85498',height:`${props.diagramData?.prod.db&&props.diagramData?.prod.db*1.5}px`}}
                        className={s.testsResultsDb}><span>{props.diagramData?.prod.db}</span></div>

                </div>
                <span>prod</span>
            </div>
            <div className={s.columnContainer}>
                <div style={{height: '195px'}} className={s.normColumn}>

                    <svg
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                    >

                        <defs>
                            <pattern
                                id="diagonalHatch"
                                patternUnits="userSpaceOnUse"
                                width="4"
                                height="25"
                                patternTransform="rotate(-45 2 2)"
                            >

                                <path d="M -1,2 l 6,0" stroke="#FFFFFF" strokeWidth="15"/>
                            </pattern>


                        </defs>

                        <rect
                            x="1"
                            y="1"
                            width="100%"
                            height="100%"
                            fill="url(#diagonalHatch)"
                        />
                        <svg
                            x="20%"
                            y="45%"
                            width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <g>
                                <rect width="48" height="24" rx="5" fill="white"/>
                                <text x="11" y="16" fontWeight={'bold'} fontSize="14" fill="#898290">150</text>
                            </g>
                        </svg>

                    </svg>

                </div>
                <span>норматив</span>
            </div>


        </div>
        <div className={s.footer}>
            <div className={s.footerValue}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" rx="3" fill="#4AB6E8"/>
                </svg>
                <span>Клиентская часть</span></div>
            <div className={s.footerValue}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" rx="3" fill="#AA6FAC"/>
                </svg>
                <span>Серверная часть</span></div>
            <div className={s.footerValue}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" rx="3" fill="#E85498"/>
                </svg>
                <span>База данных</span></div>
        </div>
    </div>
};

