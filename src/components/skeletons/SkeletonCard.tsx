import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonCard: React.FC = () => {
  return (
    <ContentLoader
      style={{
        border: '1px solid #f5f5f5',
        borderRadius: '7px',
        boxShadow: '1px 1px 5px rgb(0 0 0 / 5%)',
        margin: '10px 0',
        backgroundColor: '#fff',
      }}
      speed={2}
      width={260}
      height={360}
      viewBox='0 0 260 360'
      backgroundColor='#ededed'
      foregroundColor='#dedede'
    >
      <rect x='20' y='20' rx='3' ry='9' width='220' height='150' />
      <rect x='20' y='189' rx='3' ry='3' width='219' height='21' />
      <rect x='21' y='236' rx='3' ry='3' width='93' height='42' />
      <rect x='20' y='301' rx='3' ry='3' width='155' height='32' />
      <rect x='203' y='301' rx='3' ry='3' width='32' height='32' />
    </ContentLoader>
  )
}

export default SkeletonCard
