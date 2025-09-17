import Image from "next/image"

const kp_logo = "./kp_logo.png"
const case_learn_snippet = "./case_learn_snippet.png"
const tx_snippet = "./tx_tool_snippet.png"
const data_db_snippet = "./data_db_snip.png"
const posts = [
  {
    id: 1,
    title: 'Case Automation Prioritization System',
    href: '/case-priority-app',
    description:
      "Built a TensorFlow machine learning pipeline to predict and prioritize inpatient cases using historical medical data. Deployed a Railway-hosted API backend integrated with a React front-end and data-analysis workflows.",
    imageUrl: case_learn_snippet,
    date: 'July 1, 2025',
    datetime: '2025-07-01',
    category: { title: 'Machine Learning', href: '#' },
    author: {
      name: 'Jevon Hill',
      role: 'Software Data Engineer',
      href: '#',
      imageUrl: kp_logo,
    },
  },
  {
    id: 2,
    title: 'Transfer Tool Automation Dashboard',
    href: '/transfer-automation-app',
    description: 'Built a Next.js application that automates clinical transfer workflows by streamlining summaries, forms, and intake processes, saving 1–2 hours daily through ExcelJS parsing, dynamic data population, and centralized resource directories.',
    imageUrl: tx_snippet,
    date: 'Jan 30, 2023',
    datetime: '2023-01-30',
    category: { title: 'Automation', href: '#' },
    author: {
      name: 'Jevon Hill',
      role: 'Software Data Engineer',
      href: '#',
      imageUrl: kp_logo,
    },
  },
  {
    id: 3,
    title: 'Dynamic Data Dashboard',
    href: '/data-dashboard-app',
    description: 'Developed a Next.js data dashboard with pandas and RechartsJS that analyzes phone performance and attendance metrics using reusable object-oriented data processing and dynamic interactive visualizations.',
    imageUrl: data_db_snippet,
    date: 'Jan 12, 2025',
    datetime: '2025-01-12',
    category: { title: 'Data Analysis', href: '#' },
    author: {
      name: 'Jevon Hill',
      role: 'Software Data Engineer',
      href: '#',
      imageUrl: kp_logo,
    },
  },
]

export default function page() {
  return (
    <div className="text-black py-6 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl dark:text-white">
            Jevon Hill's Portfolio
          </h2>
          <p className="text-lg/8">
            Software Data Engineer at Kaiser Permanente
          </p>
          <div className="mt-16 space-y-20 lg:mt-20">
            {posts.map((post) => (
              <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-video sm:aspect-2/1 lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    alt=""
                    src={post.imageUrl}
                    className="inset-0 size-full rounded-2xl bg-gray-50 object-cover dark:bg-gray-800"
                  />
                  <div className="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10 dark:inset-ring-white/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs font-bold">
                    <time dateTime={post.datetime} className="">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full px-3 py-1.5 font-medium text-white  hover:bg-gray-100 dark:bg-[#7e4519]  dark:hover:bg-gray-800"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm/6">{post.description}</p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6 dark:border-white/10">
                    <div className="relative flex items-center gap-x-4">
                      <img
                        alt=""
                        src={post.author.imageUrl}
                        className="size-10 rounded-full bg-gray-50 dark:bg-gray-800"
                      />
                      <div className="text-sm/6">
                        <p className="font-semibold text-[#3c200b]">
                          <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-black">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-muted mt-20">
            <p className="font-bold">
              More coming soon, yes I have more projects ...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
