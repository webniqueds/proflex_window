import React from 'react'
import ComparisionLayout from '@/components/comparision/ComparisionLayout';
import { upvcVsWood } from '@/data/comparisions/upvc-vs-wood';

const UpvcVsWood = () => {
  return <ComparisionLayout {...upvcVsWood} />
}

export default UpvcVsWood