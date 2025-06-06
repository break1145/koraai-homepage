import { motion } from 'framer-motion'
import JobList from '../components/JobList.jsx'
import AiJobHeader from '../components/AiJobHeader.jsx'
import FeaturesList from '../components/FeaturesList.jsx'
import { STYLES } from '../constants/aiJobConfig.js'

const AiJob = () => {
  return (
    <div className="pt-16" style={{ background: STYLES.background }}>
      <div className="container ml-0 max-w-5xl pl-8">
        <AiJobHeader />
        <FeaturesList />
      </div>
      <JobList />
    </div>
  )
}

export default AiJob