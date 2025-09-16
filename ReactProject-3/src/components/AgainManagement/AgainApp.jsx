import React from 'react'
import AgainManagement from './AgainManagement'
import again_img1 from '../../assets/img-3.webp'
import again_img2 from '../../assets/img-4.webp'
import again_img3 from '../../assets/img-5.webp'
import again_img4 from '../../assets/img-6.webp'

export default function AgainApp() {
    return (
        <div>
            <AgainManagement

                h2a={'Equipment Management'} pa={'Equipment Assistant takes the pain out of managing your large investment of equipment. It is smart enough to know all the maintenance routines required to properly maintain your fleet without you having to manually enter any such data. Just like Schedule Assistant for labor management, Equipment Assistant will tell your technician all the tasks that need to be completed to keep your fleet running in top notch condition. As the work is completed, Equipment Assistant will compile and build reports to give you visibility into the health of your fleet.'} imga={again_img1}

                h2b={'Budget and Expense Management'} pb={'Budget and expense management should be easy but it has traditionally been a pain with multiple spreadsheets and dual entries. Expense Assistant will take the pain out of the budgeting and expense management process. As expenses are incurred, Expense Assistant will record those expenses along with attachments for receipts and invoices. Additionally it will compile reports so that you have your budgeting detail at the click of a button.'} imgb={again_img2}

                h2c={'Chemical and Fertilizer Management'} pc={'Effortlessly keep and track all your chemical and fertilizer applications. Integrated into Labor Assistant, Application Assistant will automatically compile all of your application records and accumulation reporting. With over 10,000 chemicals and fertilizers from over 453 product manufacturers, Application Assistant is the most comprehensive chemical and fertilizer database on the planet. In addition, easily pull up product labels and safety data sheets and automatically integrate safety information into your spray applicator worksheets.'} imgc={again_img3}

                h2d={'Mapping and Geo-Technologies'} pd={'Knowing your property is one thing. Integrating it into day to day operations is another. Location Assistant makes it easy to map your areas of responsibility. With its tight integration into the rest of the Turf Assistant platform, these areas and locations will be used to define your standards for your turf. Additionally Location Assistant will size these areas and pass that information along to aid you in planning your fertilizer and chemical applications costs and requirements.'} imgd={again_img4}

            />
        </div>
    )
}