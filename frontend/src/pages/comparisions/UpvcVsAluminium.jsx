import React from 'react'
import ComparisionLayout from '@/components/comparision/ComparisionLayout';
import { upvcVsAluminium } from '@/data/comparisions/upvc-vs-aluminium';

const UpvcVsAluminium = () => {
  return <ComparisionLayout {...upvcVsAluminium} />
}

export default UpvcVsAluminium