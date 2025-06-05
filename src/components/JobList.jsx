import { motion } from 'framer-motion'

const JobList = () => {
  const jobs = [
    {
      icon: (
        <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 13C4 12.4477 4.44772 12 5 12H19C19.5523 12 20 12.4477 20 13V15C20 15.5523 19.5523 16 19 16H5C4.44772 16 4 15.5523 4 15V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 19H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Domain Expert for AI Evaluation',
      rate: 'Rate: $30-200/hour',
      company: 'Company: Applied AI Lab',
      location: 'Location: Remote (CN preferred)'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 8L3 12L7 16M17 8L21 12L17 16M13 4L11 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Software Engineer – AI Training Tasks',
      rate: 'Rate: $30-80/hour',
      company: 'Company: Global AI Startup',
      location: 'Location: Remote (Flexible timezone)'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16.5V14.5M12 8.5V6.5M15.5 10C15.5 11.3807 14.3807 12.5 13 12.5H11C9.61929 12.5 8.5 11.3807 8.5 10C8.5 8.61929 9.61929 7.5 11 7.5H13C14.3807 7.5 15.5 8.61929 15.5 10ZM15.5 18C15.5 19.3807 14.3807 20.5 13 20.5H11C9.61929 20.5 8.5 19.3807 8.5 18C8.5 16.6193 9.61929 15.5 11 15.5H13C14.3807 15.5 15.5 16.6193 15.5 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'AI Engineer (LLM / Agent Systems)',
      rate: 'Rate: $100K-150K/year',
      company: 'Company: Next-gen AI Infra Startup',
      location: 'Location: Remote / Hybrid (US/SEA)'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Founding Tech Partner / CTO',
      rate: 'Rate: Equity + Project-Based Pay',
      company: 'Company: Early-stage AI product studio',
      location: 'Location: Remote / Hybrid (Shanghai)'
    }
  ]

  return (
    <div className="py-16 px-4" style={{ background: 'linear-gradient(to right, #f1f5f9, #C0CDF4)' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
          >
            AI-native Work You Can Join Today
          </motion.h2>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium"
            >
              Apply for Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-100 text-blue-500 px-6 py-2 rounded-full font-medium"
            >
              Talent Onboarding Guide
            </motion.button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                {job.icon}
              </div>
              <h3 className="text-lg font-semibold mb-4">{job.title}</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>{job.rate}</p>
                <p>{job.company}</p>
                <p>{job.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default JobList