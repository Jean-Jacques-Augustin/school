import {Card} from "@/components/ui/card";

const benefice = [{
    id: 1,
    title: 'Flexible Learning Schedule',
    description: 'Fit your coursework around your existing commitments and obligations.',
}, {
    id: 1,
    title: 'Flexible Learning Schedule',
    description: 'Fit your coursework around your existing commitments and obligations.',
}, {
    id: 1,
    title: 'Flexible Learning Schedule',
    description: 'Fit your coursework around your existing commitments and obligations.',
}, {
    id: 1,
    title: 'Flexible Learning Schedule',
    description: 'Fit your coursework around your existing commitments and obligations.',
}, {
    id: 1,
    title: 'Flexible Learning Schedule',
    description: 'Fit your coursework around your existing commitments and obligations.',
}, {
    id: 1,
    title: 'Flexible Learning Schedule',
    description: 'Fit your coursework around your existing commitments and obligations.',
}, {
    id: 1,
    title: 'Flexible Learning Schedule',
    description: 'Fit your coursework around your existing commitments and obligations.',
},]


export default function Benefits() {
    return (<section className="container mx-auto">
        <div className="">
            <div className="">
                <h1 className="font-bold text-3xl ">Benefits</h1>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id
                    imperdiet et. <br></br>Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit
                    fringilla feugiat senectus in.</p>
            </div>
            <button className="">View All</button>
        </div>
        <div className="">
            <div
                // grid 3 cards
                className={"grid grid-cols-3 gap-5 mt-5"}
            >
                {benefice.map((element, index) => <Card  key={index}
                    className={"shadow-none rounded-none"}
                >
                    <p className="font-bolds text-6xl text-right">{index +1}</p>
                    <h3 className="font-bold text-xl ">
                        {element.title}
                    </h3>
                    <p className="flex">
                        {element.description}
                    </p>
                    <div>
                        <svg className="" width="74" height="65" viewBox="0 0 74 74"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="73" height="73" rx="7.5" fill="#FCFCFD"/>
                            <rect x="0.5" y="0.5" width="73" height="73" rx="7.5" stroke="#F1F1F3"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M28.8734 45.1266C29.3714 45.6245 30.1786 45.6245 30.6766 45.1266L42.95 32.8531V42.525C42.95 43.2292 43.5208 43.8 44.225 43.8C44.9292 43.8 45.5 43.2292 45.5 42.525V29.775C45.5 29.0708 44.9292 28.5 44.225 28.5H31.475C30.7708 28.5 30.2 29.0708 30.2 29.775C30.2 30.4792 30.7708 31.05 31.475 31.05H41.1469L28.8734 43.3234C28.3755 43.8214 28.3755 44.6286 28.8734 45.1266Z"
                                  fill="#FF9500"/>
                        </svg>
                    </div>
                </Card>)}

            </div>
        </div>
    </section>);
}