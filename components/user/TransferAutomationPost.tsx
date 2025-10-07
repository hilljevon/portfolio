import { CheckCircleIcon, InfoIcon } from 'lucide-react'

export default function TransferAutomationPost() {
    return (
        <div className="bg-[white] px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base/7 text-gray-700 dark:text-gray-300">
                <p className="text-base/7 font-semibold text-[#3c200b] dark:text-[#3c200b">Data Analysis</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                    Transfer Automation Dashboard
                </h1>
                <div className='my-6 text-xl/8 underline text-blue-400 hover:text-blue-300'>
                    <a href='https://testing-git-demo-limited-jevons-projects-0dedbb2a.vercel.app/'>Sample</a>
                </div>
                <p className="mt-6 text-xl/8">
                    Summary: This web application provides two primary automation functions for inpatient case management workflows. First, it processes lengthy clinical summaries and generates condensed templates that physicians use to assess clinical stability. Second, it parses daily case census spreadsheets and automatically generates clinical request templates for medical centers. Together, these automations save analysts and nurses 2–3 hours per day. The tool is presented in a dynamic dashboard that displays repatriation details and other relevant information based on user input.
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
                        This project was pivotal because it marked my transition from case management into software engineering, enabling me to design and build applications that streamlined departmental workflows.
                    </p>

                    <p className="mt-10">
                        In the repatriation process, analysts previously had to manually review clinical summaries to extract key information for physician review. Parsing a single summary took about 15 minutes. I developed logic in TypeScript to automatically extract the required details, reducing processing time to under one second. The dashboard also serves as an information hub, dynamically displaying links and details based on user input.
                    </p>
                    <p className="mt-10">
                        Another major feature of the application is the automation of clinical request generation. Each morning, leadership distributes a spreadsheet of inpatient cases. Previously, analysts manually reviewed and created clinical requests, a process that took about one hour per day. The application now parses the spreadsheet automatically and generates requests, cutting the time down to 10–15 minutes. The system also includes a searchable phone directory of all Southern California medical centers and relevant contacts, consolidating frequently used resources into one place.
                    </p>
                    <p className="mt-10">
                        The main challenge was designing a single-page dashboard that could present all critical repatriation data clearly, while dynamically updating content based on user input. This required not only building efficient parsing logic but also deeply understanding the repatriation workflow to ensure the tool was intuitive and aligned with daily use.
                    </p>
                    <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
                        Impact
                    </h2>
                    <p className="mt-10">
                        The Transfer Tool Automation Dashboard streamlined two major workflows, reducing hours of manual effort each day and improving efficiency for both analysts and physicians. It also served as the foundation for my career shift into software engineering by demonstrating the value of workflow automation in clinical operations.
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
