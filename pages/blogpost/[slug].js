/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useRouter } from 'next/router'

function slug() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>{slug}</div>
  )
}

export default slug