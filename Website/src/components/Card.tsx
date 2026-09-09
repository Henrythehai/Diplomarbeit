// styles
import './Card.css'
import React from "react";
import {postToastNotification} from "./Notifications/ToastNotificationCenter";

interface CardProps extends React.PropsWithChildren {
    title: string;
    className?: string;
}

export const Card = ({title, children, className}: CardProps) => {
    return (
        <div className="card" style={{gridArea: className}}>
            <span className="cardTitle" >{title}</span>
            {children}
        </div>
    );
};
