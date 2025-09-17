import { CheckCircleIcon, InfoIcon } from 'lucide-react'

export default function CasePriorityPost() {
    return (
        <div className="bg-[white] px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base/7 text-gray-700 dark:text-gray-300">
                <p className="text-base/7 font-semibold text-[#3c200b] dark:text-[#3c200b">Machine Learning</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                    Case Priority Automation Pipeline
                </h1>
                <p className="mt-6 text-xl/8">
                    Summary: Management previously spent 1.5–2 hours each morning manually reviewing inpatient case spreadsheets to determine assignments. To solve this, I built a full stack web application where users upload the daily case census, and a machine learning pipeline assigns a prioritization score based on case parameters. The model predicts in about three seconds and consistently achieves over 90% accuracy, precision, recall, and F1 score.

                    This solution was developed using NextJS for the frontend, Pandas for data preprocessing, TensorFlow for the neural network, ExcelJS for spreadsheet parsing, and Railway for backend API deployment.
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
                        Issue
                    </h2>
                    <p className="mt-6">
                        The department faces a daily census of approximately 450 inpatient cases, far exceeding available staffing. Leadership had to triage manually, considering about 30 parameters per case, such as hospital location, level of care, diagnoses, prior authorization decisions, and anticipated disposition. This manual review required 1.5–2 hours every day.

                        The goal was to automate the process to reduce time spent by at least 75% while maintaining high predictive performance across accuracy, precision, recall, and F1.
                    </p>
                    <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
                        Overview
                    </h2>
                    <p className="mt-10">
                        I designed a machine learning model that assigns each case a logistic score, where values closer to 1 indicate higher-priority cases. The workflow began with analyzing historical data to identify patterns and applying rule-based filters with pandas to remove non-relevant cases. This logic was encapsulated into an object-oriented class for reusability and adaptability to new data.
                    </p>
                    <p className="mt-10">
                        From there, I developed a neural network trained on the eight most influential parameters. Some were numerical, others required one-hot encoding, and categorical values such as hospital were especially impactful, since certain facilities consistently produced higher-priority cases due to specialized care or capacity constraints.
                    </p>
                    <p className="mt-10">
                        A key challenge was ensuring proper preprocessing of mixed data types, so that text inputs were encoded correctly and numerical values were normalized. Once trained on historical datasets, the model consistently achieved performance levels above 90%, often closer to 95%.
                    </p>
                    <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
                        Impact
                    </h2>
                    <p className="mt-10">
                        The application reduced assignment time from nearly two hours to just seconds, enabling leadership to focus on higher-level decision-making. It also introduced a consistent, scalable process for case prioritization while maintaining strong alignment with historical decision quality.
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
