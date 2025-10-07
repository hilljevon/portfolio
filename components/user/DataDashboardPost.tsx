import { CheckCircleIcon, InfoIcon } from 'lucide-react'

export default function DataDashboardPost() {
    return (
        <div className="bg-[white] px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base/7 text-gray-700 dark:text-gray-300">
                <p className="text-base/7 font-semibold text-[#3c200b] dark:text-[#3c200b">Data Analysis</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                    Dynamic Data Dashboard
                </h1>
                <div className='my-6 text-xl/8 underline text-blue-400 hover:text-blue-300'>
                    <a href="https://phone-stats-cpfhanb1l-jevons-projects-0dedbb2a.vercel.app/">Sample</a>
                </div>
                <p className="mt-6 text-xl/8">
                    Summary: I was tasked with transforming raw customer service data into a dynamic, web-based dashboard for KP leadership. The project began by exporting the data to CSV, where I cleaned and filtered it using pandas. I structured the cleaning process into an object-oriented component to ensure reusability for future datasets. The processed data was then converted into JSON and passed to the front end, where it was visualized with interactive charts using ReChartsJS. Through multiple consultations with KP leadership, I identified and presented the most impactful visualizations.
                </p>
                <div className="mt-10 max-w-2xl text-gray-600 dark:text-gray-400">
                    {/* <p>
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                        sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                        sed turpis id.
                    </p>
                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600 dark:text-gray-400">
                        <li className="flex gap-x-3">
                            <CheckCircleIcon
                                aria-hidden="true"
                                className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                            />
                            <span>
                                <strong className="font-semibold text-gray-900 dark:text-white">Data types.</strong> Lorem ipsum, dolor
                                sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                                blanditiis ratione.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon
                                aria-hidden="true"
                                className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                            />
                            <span>
                                <strong className="font-semibold text-gray-900 dark:text-white">Loops.</strong> Anim aute id magna
                                aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon
                                aria-hidden="true"
                                className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                            />
                            <span>
                                <strong className="font-semibold text-gray-900 dark:text-white">Events.</strong> Ac tincidunt sapien
                                vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                            </span>
                        </li>
                    </ul>
                    <p className="mt-8">
                        Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                        fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                        adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                    </p> */}
                    <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
                        Overview
                    </h2>
                    <p className="mt-6">
                        The most significant challenge was determining how to highlight strengths and weaknesses from a leadership perspective. The dataset primarily focused on Answered Call % and Not Ready Time % for the customer service team across the year.
                    </p>

                    <p className="mt-10">
                        The original data contained inconsistencies, including null values and mismatched integer and float types. I resolved these issues in pandas, then constructed dataframes that would serve as the foundation of the dashboard. This process required both technical analysis to uncover trends and active collaboration with leadership to validate the relevance of selected metrics.
                    </p>
                    <p className="mt-10">
                        Once the dataframes were finalized, I exported them in JSON format and integrated them into the front end. Using ReChartsJS and shadCN, I developed interactive charts with dynamic tooltips and smooth transitions, ensuring a user-friendly experience.
                    </p>
                    <p className="mt-10">
                        This project gave me valuable experience in data cleaning, visualization, and communication. It not only improved my ability to manipulate and present data but also strengthened my skills in consulting with stakeholders to align technical outputs with organizational priorities.
                    </p>
                </div>
                {/* <figure className="mt-16">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                        className="aspect-video rounded-xl bg-gray-50 object-cover dark:bg-gray-800"
                    />
                    <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-500 dark:text-gray-400">
                        <InfoIcon
                            aria-hidden="true"
                            className="mt-0.5 size-5 flex-none text-gray-300 dark:text-gray-600"
                        />
                        Faucibus commodo massa rhoncus, volutpat.
                    </figcaption>
                </figure> */}
                {/* <div className="mt-16 max-w-2xl text-gray-600 dark:text-gray-400">
                    <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
                        Everything you need to get up and running
                    </h2>
                    <p className="mt-6">
                        Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In
                        amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie.
                        Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat
                        ac. Cras fermentum convallis quam.
                    </p>
                    <p className="mt-8">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                        sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                    </p>
                </div> */}
            </div>
        </div>
    )
}
