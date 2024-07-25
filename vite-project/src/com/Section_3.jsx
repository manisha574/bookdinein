import React from 'react'
import Column from './Column'

export default function Section_3() {

    const columnsData = [
        {
            title: 'Restaurant Booking & Conversion Tracking',
            content: `Our Programming interface simplifies it to add BookMyDine's center usefulness to anything, meaning your clients can book eateries straightforwardly from your site, application, or gadget.`, // Content of the first column
            bgColor: 'bg-red-700',
            titlecolor:'text-white',
        },
        {
            title: '25 million diners. Every month.',
            content: `A large number of restaurants depend on BookMyDine for eatery reservations, and a considerable lot of them book through Accomplice Programming interface fueled applications, gadgets, and sites like yours. By consolidating BookMyDine's Programming interface, you're serving your organization while outfitting BookMyDine's range and notoriety.`, // Content of the second column
            bgColor: 'bg-white', 
            titlecolor:'text-slate-900',
        },
        
        {
            title: 'Improved Efficiency & Better Performance', // Title of the third column
            content: `Coordinating with frameworks, for example, retail location, email advertising, and devotion, we help our common eatery clients by smoothing out their activities. This makes a more powerful set-up of the executives and functional items for cafés.`, // Content of the third column
            bgColor: 'bg-red-700', // Background color class for the third column
            titlecolor:'text-white',
        },
    ];
      
    return (
        <div className='grid grid-cols-3 text-center '>
            {columnsData.map((column, index) => (
                <Column
                    key={index}
                    title={column.title}
                    bgColor={column.bgColor}
                    content={column.content}
                    titlecolor={ column.titlecolor}
                
                />
                
            ))}
        </div>
    );
}

