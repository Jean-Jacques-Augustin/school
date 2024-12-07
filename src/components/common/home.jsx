import Image from "next/image";

const company = [{
    url: '/images/company/amazon.svg', name: 'amazone'
}, {
    url: '/images/company/notion.svg', name: 'notion'
}, {
    url: '/images/company/spotify.svg', name: 'spotify'
}, {
    url: '/images/company/zappier.svg', name: 'zappier'
}, {
    url: '/images/company/zoom.svg', name: 'zoom'
}

]


export default function Home() {
    return (<main
        >

            {/*Body*/}
            <section className=" flex  flex-col mt-24 ">
                {/*Title*/}
                <div className="flex items-center rounded border mx-auto p-3 relative ">
                    <svg className="flex absolute   -mt-20 -ml-10 " width="33 " height="43" viewBox="0 0 40 43"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M13.5489 40.1274C9.82492 39.0757 5.92609 38.5452 2.14397 38.0592C1.32936 37.9573 0.573044 38.5259 0.514858 39.3269C0.398485 40.1286 0.980691 40.8617 1.73712 40.9636C5.40286 41.4314 9.18465 41.9321 12.734 42.9445C13.4904 43.1641 14.3054 42.7121 14.5381 41.9345C14.7709 41.1574 14.3053 40.3476 13.5489 40.1274Z"
                              fill="#262626"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M24.8365 25.2172C18.8433 19.0623 12.0937 13.6997 6.21685 7.37974C5.69318 6.78949 4.76219 6.75787 4.18033 7.30888C3.59846 7.86048 3.5405 8.78802 4.12237 9.37826C9.9992 15.7164 16.7488 21.0966 22.742 27.2696C23.3239 27.8458 24.2547 27.854 24.8365 27.2872C25.3602 26.7209 25.4184 25.7934 24.8365 25.2172Z"
                              fill="#262626"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M36.0672 1.54341C36.2417 5.06616 36.4159 8.58891 36.5905 12.1123C36.5905 12.9192 37.2891 13.5422 38.1037 13.503C38.9183 13.4631 39.4998 12.7763 39.4998 11.9688C39.3253 8.44018 39.151 4.91216 38.9765 1.38413C38.9183 0.577224 38.2199 -0.0417174 37.4053 0.00219986C36.6489 0.0461172 36.009 0.737085 36.0672 1.54341Z"
                              fill="#262626"/>
                    </svg>
                    <svg className="flex border p-1 rounded" width="35" height="34" viewBox="0 0 35 34" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M21.2049 2.25948C21.6317 2.4974 21.8411 2.99569 21.7126 3.46707L18.8911 13.8125H29.1875C29.6106 13.8125 29.9934 14.0635 30.162 14.4515C30.3306 14.8396 30.2529 15.2907 29.9643 15.6L15.0893 31.5375C14.7559 31.8947 14.2219 31.9784 13.7951 31.7405C13.3684 31.5026 13.1589 31.0043 13.2875 30.5329L16.1089 20.1875H5.81252C5.38944 20.1875 5.00667 19.9365 4.83805 19.5485C4.66943 19.1604 4.7471 18.7093 5.03578 18.4L19.9108 2.46254C20.2442 2.10535 20.7782 2.02157 21.2049 2.25948Z"
                              fill="#262626"/>
                    </svg>
                    <h1 className="flex text-3xl font-bold "><span className="ml-2 text-orange-400">Unlock</span>Your
                        Creative Potential</h1>
                </div>
                <div className="flex flex-col mx-auto mt-10 items-center">
                    <h2 className="text-3xl">
                        with Online Design and Development Courses.
                    </h2>
                    <p className="mt-4">Learn from Industry Experts and Enhance Your Skills.</p>
                </div>
                <div className="flex mx-auto mt-11 gap-2">
                    <button className="border p-2 rounded bg-orange-400 text-white">Explore Courses</button>
                    <button className="border p-2 rounded">View Pricing</button>
                </div>
                <div
                    className="flex justify-center mt-24 gap-5"
                >
                    {company.map((element, index) => <Image key={index} src={element.url} alt={element.name}
                                                            width={215}
                                                            title={element.name}
                                                            height={60}
                                                          />)}
                </div>
                <div id="image"
                     className="rounded mt-24  w-5/6 bg-cover bg-center object-fill bg-no-repeat container mx-auto">

                </div>
            </section>
        </main>

    );
}


  