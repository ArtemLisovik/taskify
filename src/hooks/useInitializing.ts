import React from 'react';

import { useAppDispatch, useAppSelector } from 'hooks';
import { getAuth } from 'store'

export const useInitializing = () => {
  const dispatch = useAppDispatch()
  const { loader } = useAppSelector(state => state.auth) 

  React.useEffect(():any => {
      dispatch(getAuth())
  }, [])

  return loader
}