import React from 'react';
import {useState} from 'react';
import {type  ReactNode } from "react";


export type AppInfo = {
    title:string;
    description:string;
    link:string
    img: ReactNode;
}

export default function AppsBox({apps} :{apps:AppInfo})
{
    return (
        <div className="glass p-6 rounded-2xl border border-white/10 shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-white">{apps.title}</h3>
            <p className="text-sm text-white/80">{apps.description}</p>
            <div className="mt-4">
                <a href={apps.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-black px-3 py-1 rounded-md text-sm">View</a>
            </div>
        </div>
    );

}