import Header from '@/components/shared/Header'
import React from 'react'
import { transformationTypes } from '@/constants'
import TransformationForm from '@/components/shared/TransformationForm'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { getUserById } from '@/lib/actions/user.actions'

const AddTransformationTypePage = async ({params: {type}}: SearchParamProps) => {
   
  const transfomation = transformationTypes[type]
  
  const {userId} = auth()
  if (!userId) redirect('/sign-in')
   
 
  return (
    <>
    <Header title={transfomation.title}
    subtitle={transfomation.subTitle}
    />
    <TransformationForm action='Add'
    userId={userId}
    type={transfomation.type as TransformationTypeKey}
    creditBalance={4}
    />
    </>
  )
}

export default AddTransformationTypePage
